import React, {Component} from "react";
import Editor from "draft-js-plugins-editor";
import createMentionPlugin from "draft-js-mention-plugin";
import {EditorState} from "draft-js";
import {fromJS} from "immutable";

import styles from '../../shared/editor-styles';
import 'draft-js-mention-plugin/lib/plugin.css';

const mentions = fromJS([
  {
    name: 'Lars Barlindhaug',
    link: 'https://twitter.com/barlindh',
    avatar: 'https://www.iterate.no/assets/images/mugshots/barlindhaug-8c423440.jpg'
  },
  {
    name: 'Patrick Skevik',
    link: 'https://github.com/patrisk',
    avatar: 'https://www.iterate.no/assets/images/mugshots/patrick-5d65a2c6.jpg'
  },
  {
    name: 'Jonas Feiring',
    link: 'https://twitter.com/feiring',
    avatar: 'https://www.iterate.no/assets/images/mugshots/jonas-d8906a5a.jpg'
  },
  {
    name: 'Erik Assum',
    link: 'https://twitter.com/slipset',
    avatar: 'https://www.iterate.no/assets/images/mugshots/erik-7f48c6c1.jpg'
  }
]);

const mentionPlugin = createMentionPlugin({mentions});

class EditorUsingMentionPlugin extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  handleEditorStateChange = (editorState) => this.setState({editorState});

  render() {
    return (
      <div style={styles.root}>
        <h1>Editor using mention plugin</h1>
        <div style={styles.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.handleEditorStateChange}
            plugins={[mentionPlugin]}/>
        </div>
      </div>
    );
  }
}

export default EditorUsingMentionPlugin;
