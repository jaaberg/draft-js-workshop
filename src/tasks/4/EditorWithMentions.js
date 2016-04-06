import React, { Component } from 'react';
import {Editor, EditorState, CompositeDecorator} from 'draft-js';
import findWithRegex from '../../utils/findWithRegex';

const HANDLE_REGEX = /\@[\w]+/g;

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

const NAMES = ['Martin', 'Marte', 'Jørgen', 'Brynjar', 'Henrik', 'Martinus', 'Markus', 'Ole', 'Rune'];

class EditorWithMentions extends Component {
  constructor(props) {
    super(props);

    const Mention = (props) => {
      const filteredNames = NAMES
          .filter((name) => name.toLowerCase().indexOf(props.decoratedText.slice(1).toLowerCase()) > -1)
          .map((name) => <div>{name}</div>);

      return (
        <span style={styles.mention}>
          <span {...props}>{props.children}</span>
          <div contentEditable={false} style={styles.mentionSuggestions}>
            {filteredNames}
          </div>
        </span>
      );
    };

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: Mention
      }
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };

    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder='Write me something...'
            />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
          />
      </div>
    );
  }
}

const styles = {
  root: {
    padding: 20,
    width: 600
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: 'center'
  },
  mention: {
    position: 'relative'
  },
  mentionSuggestions: {
    border: '1px solid grey',
    display: 'inline-block',
    position: 'absolute',
    minWidth: '240px',
    borderRadius: '4px',
    backgroundColor: 'white',
    padding: '5px',
    boxShadow: '0px 4px 30px 0px rgba(220,220,220,1)',
    top: '20px',
    left: '0'
  }
};


export default EditorWithMentions;
