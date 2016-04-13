import React, {Component} from "react";

import styles from '../../shared/editor-styles';
import 'draft-js-mention-plugin/lib/plugin.css';

/*
 TASK 4

 Create fully implemented mentions support by using the draft-js-plugins package.

 Hint: read the draft-js-plugins docs.
*/

class EditorUsingMentionPlugin extends Component {
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

export default EditorUsingMentionPlugin;
