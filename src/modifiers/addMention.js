import { Entity, Modifier, EditorState } from 'draft-js';
import getSearchText from '../utils/getSearchText';

const addMention = (editorState, mention) => {
  const entityKey = Entity.create('MENTION', 'SEGMENTED', { mention });

  const { begin, end } = getSearchText(editorState);

  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: begin,
    focusOffset: end
  });

  let mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    mention.name,
    null,
    entityKey
  );

  // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  const blockKey = mentionTextSelection.getAnchorKey();
  const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    mentionReplacedContent = Modifier.insertText(
      mentionReplacedContent,
      mentionReplacedContent.getSelectionAfter(),
      ' '
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    mentionReplacedContent,
    'insert-mention'
  );
  return EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};


const styles = {
  header: {
    textAlign: 'center'
  },
  editor: {
    margin: '50px auto 100px auto',
    width: '400px'
  },
  mention: {
    backgroundColor: 'red'
  }
};


export default addMention;
