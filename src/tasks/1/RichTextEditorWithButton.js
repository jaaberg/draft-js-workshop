import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  logState = (e) => {
    e.preventDefault();
    console.log(this.state.editorState.toJS());
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focusEditor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            ref="editor"
            placeholder='Write me something...' />
        </div>
        <input
          onMouseDown={this.logState}
          style={styles.button}
          type="button"
          value="Log State" />
      </div>
    );
  }
}

export default PlainTextEditor;
