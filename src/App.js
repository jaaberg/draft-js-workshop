import React, { Component } from 'react';
import PlainTextEditor from './tasks/1/PlainTextEditor.js';
import RichTextEditor from './tasks/2/RichTextEditor.js';
import RichTextEditorWithButton from './tasks/2/RichTextEditorWithButton.js';
import EditorWithHashtags from './tasks/3/EditorWithHashtags.js';
import EditorWithMentions from './tasks/4/EditorWithMentions.js';
import EditorWithMentions2 from './tasks/4/EditorWithMentions2.js';

export class App extends Component {
  render() {
    return (
      <div>
        <RichTextEditor />
      </div>
    );
  }
}