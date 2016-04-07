import React, {Component} from "react";
import {Editor, EditorState} from "draft-js";

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  logState = () => console.log(this.state.editorState.toJS());

  handleEditorStateChange = (editorState) => this.setState({editorState});

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
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
