import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onChange = (editorState) => this.setState({editorState});

  logState = () => console.log(this.state.editorState.toJS());

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div style={styles.root}>
        <h1>Rich text editor with button</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div style={styles.editor}>
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

export default PlainTextEditor;
