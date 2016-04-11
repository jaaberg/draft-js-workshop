import React, {Component} from "react";

import styles from '../../shared/editor-styles';
import 'draft-js-mention-plugin/lib/plugin.css';

class EditorUsingMentionPlugin extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor}>

        </div>
      </div>
    );
  }
}

export default EditorUsingMentionPlugin;
