import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

/*
 TASK 2

 Create a Rich text editor with Draft.js.

 You've been given the solution from the last task and a button to log the
 state to console. Tips: RichUtils.handleKeyCommand. The Editor also has a
 handleKeyCommand property.
 */

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  // Logs the state to console to get an idea of how the data i stored
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
