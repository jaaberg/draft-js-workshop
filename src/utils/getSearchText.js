function getWordAt(string, position) {
  const str = String(string);
  const pos = Number(position) >>> 0;

  // Search for the word's beginning and end.
  const left = str.slice(0, pos + 1).search(/\S+$/);
  const right = str.slice(pos).search(/\s/);

  // The last word in the string is a special case.
  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length
    };
  }

  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos
  };
}

function getSearchText(editorState) {
  const selection = editorState.getSelection();
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset() - 1;
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
}

export default getSearchText;
