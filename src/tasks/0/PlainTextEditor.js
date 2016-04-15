import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

import styles from '../../shared/editor-styles';

/*
 TASK 1

 Create a Plain text editor with Draft.js.

 You need an Editor-component which has an onChange property that you should
 use to update the editorState. You also need to pass the editor an instance
 of EditorState (EditorState.createEmpty)
 */

class PlainTextEditor extends Component {
  state = {};

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor}>
          {/* Code goes here */}
        </div>
      </div>
    );
  }
}

export default PlainTextEditor;
