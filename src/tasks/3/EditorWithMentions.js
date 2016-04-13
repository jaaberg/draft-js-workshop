import React, {Component} from "react";

import sharedStyles from "../../shared/editor-styles";

const NAMES = ['Ariana, Andrea, Ada, Eric, Earl, Elm, Linus'];
/*
 TASK 3

 Create an editor that suggest names for you when you type @ and starts to type
 a name.

 Hint: Use the NAMES list. Use startsWith that is a default string method in JS.
 */

class EditorWithMentions extends Component {
  render() {
    return (
      <div style={sharedStyles.root}>
        <div style={sharedStyles.editor}>
          {/* Code goes here */}
        </div>
      </div>
    );
  }
}

export default EditorWithMentions;
