import React, { Component } from 'react';
import {Editor, EditorState, CompositeDecorator, Modifier} from 'draft-js';
import findWithRegex from '../../utils/findWithRegex';

const HANDLE_REGEX = /\@[\w]+/g;

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

const NAMES = ['Martin', 'Marte', 'Jørgen', 'Brynjar', 'Henrik', 'Martinus', 'Markus', 'Ole', 'Rune'];

class EditorWithMentions extends Component {
  constructor(props) {
    super(props);

    const Mention = (props) => {
      const filteredNames = NAMES
        .filter((name) => name.toLowerCase().indexOf(props.decoratedText.slice(1).toLowerCase()) > -1);

      return (
        <span style={styles.mention}>
          <span {...props}>{props.children}</span>
          <MentionSearch
            filteredUsers={filteredNames}
            editorState={this.state.editorState}
            updateEditorState={this.onChange}
            {...props}/>
        </span>
      );
    };

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: Mention
      }
    ]);

    this.state = {
      editorState: EditorState.createEmpty(compositeDecorator)
    };

    this.onChange = (editorState) => this.setState({editorState});
    this.logState = () => console.log(this.state.editorState.toJS());
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder='Write me something...'
            />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
          />
      </div>
    );
  }
}

class MentionSearch extends Component {
  state = {
    focusedOptionIndex: 0,
    isOpen: true
  };

  onMentionSelect = (mention) => {
    const { begin, end } = getSearchText(this.props.editorState, this.props.decoratedText);
    const newEditorState = addMention(this.props.editorState, mention, {begin, end});
    this.props.updateEditorState(newEditorState);
  };

  onMentionFocus = (index) => {
    this.setState({
      focusedOptionIndex: index
    });
  };

  render() {
    return (
      <div contentEditable={false} style={styles.mentionSuggestions}>
        {this.props.filteredUsers.map((user, index) => {
          return (
            <MentionSearchOption
              key={user.name}
              onMentionSelect={this.onMentionSelect}
              onMentionFocus={this.onMentionFocus}
              user={user}
              isFocused={this.state.focusedOptionIndex === index}
              index={index}
              />);
        })}
      </div>
    );
  }
}

const MentionSearchOption = (props) => {
  const onMouseUp = () => props.onMentionSelect(props.user);
  const onMouseEnter = () => props.onMentionFocus(props.index);
  const style = props.isFocused ? styles.selected : styles.notSelected;

  return (
    <div
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      role="option"
      style={style}
      >
      <span>{props.user}</span>
    </div>
  );
};

const styles = {
  root: {
    padding: 20,
    width: 600
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: 'center'
  },
  mention: {
    position: 'relative'
  },
  mentionSuggestions: {
    border: '1px solid grey',
    display: 'inline-block',
    position: 'absolute',
    minWidth: '240px',
    borderRadius: '4px',
    backgroundColor: 'white',
    boxShadow: '0px 4px 30px 0px rgba(220,220,220,1)',
    top: '20px',
    left: '0'
  },
  notSelected: {
    padding: '5px'
  },
  selected: {
    padding: '5px',
    backgroundColor: '#def0f7'
  }
};

const addMention = (editorState, mention, searchText) => {
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: searchText.begin,
    focusOffset: searchText.end
  });

  const mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    mention
  );

  const newEditorState = EditorState.push(
    editorState,
    mentionReplacedContent,
    'insert-mention'
  );

  return EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

function getSearchText(editorState, decoratedText) {
  const selection = editorState.getSelection();
  const anchorOffset = selection.getAnchorOffset() - 1;
  const begin = anchorOffset-1;
  const end = begin + decoratedText.length;

  return {
    word: decoratedText,
    begin,
    end
  };
}

export default EditorWithMentions;
