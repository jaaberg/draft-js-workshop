import React, { Component } from 'react';
import { Entity } from 'draft-js';
import MentionDropdownOption from './MentionDropdownOption';
import addMention from '../modifiers/addMention';

class MentionDropdown extends Component {
  state = {
    focusedOptionIndex: 0,
    isOpen: true
  };

  onMentionSelect = (mention) => {
    const newEditorState = addMention(this.props.editorState, mention);
    this.props.updateEditorState(newEditorState);
  };

  onMentionFocus = (index) => {
    this.setState({
      focusedOptionIndex: index
    });
  };

  render() {
    var mentions = this.props.userEntityIds.map((userEntityId) => Entity.get(userEntityId).getData());

    return (
      <div contentEditable={false} style={styles.root}>
        {mentions.map((mention, index) => {
          return (
            <MentionDropdownOption
              key={ mention.name }
              onMentionSelect={ this.onMentionSelect }
              onMentionFocus={ this.onMentionFocus }
              mention={ mention }
              isFocused={ this.state.focusedOptionIndex === index }
              index={ index }
              />);
        })}
      </div>
    );
  }
}

const styles = {
  root: {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid black'
  }
};

export default MentionDropdown;
