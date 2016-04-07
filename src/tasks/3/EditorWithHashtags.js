import React, {Component} from "react";
import {Editor, EditorState, CompositeDecorator} from "draft-js";
import findWithRegex from "../../utils/findWithRegex";

import styles from './hashtag-styles';
import sharedStyles from '../../shared/editor-styles';

const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function hashtagStrategy(contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

const Hashtag = (props) => {
  return (
    <span {...props} style={styles.hashtag}>{props.children}</span>
  );
};

class EditorWithHashtags extends Component {
  state = {
    editorState: EditorState.createEmpty(new CompositeDecorator([{
      strategy: hashtagStrategy,
      component: Hashtag
    }]))
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  logState = () => console.log(this.state.editorState.toJS());

  render() {
    return (
      <div style={sharedStyles.root}>
        <div style={sharedStyles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            placeholder='Write me something...'
            />
        </div>
        <input
          onClick={this.logState}
          style={sharedStyles.button}
          type="button"
          value="Log State"
          />
      </div>
    );
  }
}

export default EditorWithHashtags;
