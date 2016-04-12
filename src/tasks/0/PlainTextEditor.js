import React, {Component} from "react";

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {};
  
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor}>

        </div>
      </div>
    );
  }
}

export default PlainTextEditor;
