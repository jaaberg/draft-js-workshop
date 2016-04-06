import React, { Component } from 'react';
import {Editor, EditorState, CompositeDecorator} from 'draft-js';
import findWithRegex from '../../utils/findWithRegex';

const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function hashtagStrategy(contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

const Hashtag = (props) => {
  return (
    <span {...props} style={styles.hashtag}>{props.children}</span>
  );
};

class EditorWithHashtags extends Component {
  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: hashtagStrategy,
        component: Hashtag
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
  hashtag: {
    color: '#FF00CC'
  }
};

export default EditorWithHashtags;
