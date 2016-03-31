import React, { Component } from 'react';
import PlainTextEditor from './tasks/1/PlainTextEditor.js';
import EditorWithHashtags from './tasks/3/EditorWithHashtags.js';

export class App extends Component {
  render() {
    return (
      <div>
        <EditorWithHashtags />
      </div>
    );
  }
}