import React, {Component} from "react";

import styles from '../../shared/editor-styles';

class PlainTextEditor extends Component {
  state = {};

  logState = () => console.log(this.state.editorState.toJS());
  
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
