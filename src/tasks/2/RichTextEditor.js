import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  logState = () => console.log(this.state.editorState.toJS());

  handleKeyCommand = (command) =>  {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorStateChange(newState);
      return true;
    }
    return false;
  };

  render() {
    return (
      <div style={styles.root}>
        <h1>Rich text editor</h1>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            handleKeyCommand={this.handleKeyCommand}
            placeholder='Write me something...' />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State" />
      </div>
    );
  }
}

export default PlainTextEditor;
