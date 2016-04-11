import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  focusEditor = () => this.refs.editor.focus();

  handleBoldClick = () => {
    this.handleEditorStateChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  handleKeyCommand = (command) =>  {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorStateChange(newState);
      return true;
    }
    return false;
  };

  logState = () => console.log(this.state.editorState.toJS());

  render() {
    return (
      <div style={styles.root}>
        <h1>Rich text editor with button</h1>
        <button onClick={this.handleBoldClick}>Bold</button>
        <div style={styles.editor} onClick={this.focusEditor}>
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.handleEditorStateChange}
            ref="editor"
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
