import React, {Component} from "react";
import {Editor, EditorState, CompositeDecorator} from "draft-js";
import {findWithRegex} from "../../utils/helpers";
import sharedStyles from "../../shared/editor-styles";
import styles from "./mention-styles";

import {NAME_REGEX} from '../../utils/regex';

function mentionStrategy(contentBlock, callback) {
  findWithRegex(NAME_REGEX, contentBlock, callback);
}

const NAMES = ['Martin', 'Marte', 'Jørgen', 'Brynjar', 'Henrik', 'Martinus', 'Markus', 'Ole', 'Rune'];

const Mention = (props) => {
  const filteredNames = NAMES
    .filter((name) => name.toLowerCase().indexOf(props.decoratedText.slice(1).toLowerCase()) > -1)
    .map((name, index) => <div key={index}>{name}</div>);

  return (
    <span style={styles.mention}>
      <span {...props}>{props.children}</span>
      <div contentEditable={false} style={styles.mentionSuggestions}>
        {filteredNames}
      </div>
    </span>
  );
};

class EditorWithMentions extends Component {
  state = {
    editorState: EditorState.createEmpty(new CompositeDecorator([{
      strategy: mentionStrategy,
      component: Mention
    }]))
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  logState = (e) => {
    e.preventDefault();
    console.log(this.state.editorState.toJS());
  };
  
  render() {
    return (
      <div style={sharedStyles.root}>
        <h1>Editor with mentions</h1>
        <div style={sharedStyles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            placeholder='Write me something...'
          />
        </div>
        <input
          onMouseDown={this.logState}
          style={sharedStyles.button}
          type="button"
          value="Log State" />
      </div>
    );
  }
}

export default EditorWithMentions;
