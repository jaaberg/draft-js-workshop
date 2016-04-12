import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  focusEditor = () => this.refs.editor.focus();

  toggleInlineStyle = (inlineStyle) => {
    this.handleEditorStateChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
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

  logState = (e) => {
    e.preventDefault();
    console.log(this.state.editorState.toJS());
  };
  
  render() {
    const editorState = this.state.editorState;
    return (
      <div style={styles.root}>
        <h1>Rich text editor with button</h1>
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle} />
        <div style={styles.editor} onClick={this.focusEditor}>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
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

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'}
];

const InlineStyleControls = (props) => {
  const {editorState, onToggle} = props;
  var currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div>
      {INLINE_STYLES.map((type, index) =>
        <StyleButton
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          key={index} />
      )}
    </div>
  );
};

const StyleButton = (props) => {
  const {onToggle, style, active, label} = props;

  const handleStyleButtonMouseDown = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  let buttonStyle = {backgroundColor: 'grey'};

  if (active) {
    buttonStyle = {backgroundColor: 'red'};
  }

  return (
    <button style={buttonStyle} onMouseDown={handleStyleButtonMouseDown}>
      {label}
    </button>
  );
};

export default PlainTextEditor;
