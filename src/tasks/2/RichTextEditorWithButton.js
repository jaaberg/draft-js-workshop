import React, { Component } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class PlainTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render() {
    return (
      <div style={styles.root}>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
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
  }
};

export default PlainTextEditor;
