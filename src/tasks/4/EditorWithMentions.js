import React, { Component } from 'react';
import {Editor, EditorState, CompositeDecorator} from 'draft-js';
import findWithRegex from '../../utils/findWithRegex';

import sharedstyles from '../../shared/editor-styles';
import styles from './mention-styles';

const HANDLE_REGEX = /\@[\w]+/g;

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

const NAMES = ['Martin', 'Marte', 'Jørgen', 'Brynjar', 'Henrik', 'Martinus', 'Markus', 'Ole', 'Rune'];

const Mention = (props) => {
  const filteredNames = NAMES
    .filter((name) => name.toLowerCase().indexOf(props.decoratedText.slice(1).toLowerCase()) > -1)
    .map((name) => <div>{name}</div>);

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
      strategy: handleStrategy,
      component: Mention
    }]))
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  logState = () => console.log(this.state.editorState.toJS());

  render() {
    return (
      <div style={sharedstyles.root}>
        <div style={sharedstyles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            placeholder='Write me something...'
            />
        </div>
        <input
          onClick={this.logState}
          style={sharedstyles.button}
          type="button"
          value="Log State"
          />
      </div>
    );
  }
}

export default EditorWithMentions;
