import React, { Component } from 'react';
import {Entity, CompositeDecorator, Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';
import strategies from '../strategies';
import MentionDropdown from './MentionDropdown';
import getSearchText from '../utils/getSearchText';
import Hashtag from './Hashtag';

const USER_ENTITIES = [
  Entity.create('MENTION', 'SEGMENTED', {name: 'Martin Midtsund'}),
  Entity.create('MENTION', 'SEGMENTED', {name: 'Osmund Maheswaran'}),
  Entity.create('MENTION', 'SEGMENTED', {name: 'Brynjar Rongved'}),
  Entity.create('MENTION', 'SEGMENTED', {name: 'Henrik Skifjeld'}),
  Entity.create('MENTION', 'SEGMENTED', {name: 'Jørgen Aaberg'}),
  Entity.create('MENTION', 'SEGMENTED', {name: 'Marte Gjerdingen'})
];

class Draft extends Component {
  constructor(props) {
    super(props);

    const Mention = (props) => {
      const { word } = getSearchText(this.state.editorState);
      const filteredEntityIds = this.getMentionsForFilter(word.slice(1));

      return (
        <span style={styles.mention}>
          <span {...props}>{props.children}</span>
          <MentionDropdown
            userEntityIds={ filteredEntityIds }
            editorState={ this.state.editorState }
            updateEditorState={ this.onChange }/>
        </span>
      );
    };

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: strategies.handleStrategy,
        component: Mention
      }, {
        strategy: strategies.hashtagStrategy,
        component: Hashtag
      }
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };
  }

  getMentionsForFilter = (filter) => {
    return USER_ENTITIES.filter((entity) => {
      const { name } = Entity.get(entity).getData();
      return name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
  };

  onChange = (editorState) => {
    this.setState({editorState});
  };

  logStateToConsole = () => {
    console.log(this.state.editorState.getCurrentContent().toJS());
  };

  logRawStateToConsole = () => {
    console.log(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <div style={styles.header}>
          <h1>Draft.js editor</h1>
        </div>
        <div style={styles.editor}>
          <div>
            <Editor editorState={ editorState }
                    onChange={ this.onChange }/>
          </div>
          <div style={styles.logButtonRow}>
            <button onClick={this.logStateToConsole}>Log state to console</button>
            <button onClick={this.logRawStateToConsole}>Log RAW state to console</button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    textAlign: 'center'
  },
  editor: {
    margin: '50px auto 100px auto',
    width: '400px'
  },
  mention: {
    backgroundColor: 'red'
  },
  logButtonRow: {
    marginTop: '20px'
  }
};

export default Draft;
