import React, {Component} from 'react';

import sharedStyles from '../../shared/editor-styles';

/*
 TASK 2

 Create an editor that changes the color of hashtags.

 Hint: When the EditorState.createEmpty accepts a CompositeDecorator as an argument.
 The CompositeDecorator accepts a list of objects containing a strategy, and a
 component to use for this strategy.
 */

class EditorWithHashtags extends Component {
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

export default EditorWithHashtags;
