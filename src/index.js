import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router/es6';

import PlainTextEditor from './tasks/0/PlainTextEditor.js';
import RichTextEditorWithButton from './tasks/1/RichTextEditorWithButton.js';
import EditorWithHashtags from './tasks/2/EditorWithHashtags.js';
import EditorWithMentions from './tasks/3/EditorWithMentions.js';
import EditorUsingMentionPlugin from './tasks/4/EditorUsingMentionPlugin.js';

import PlainTextEditorSolution from './solutions/0/PlainTextEditorSolution.js';
import RichTextEditorWithButtonSolution from './solutions/1/RichTextEditorWithButtonSolution.js';
import EditorWithHashtagsSolution from './solutions/2/EditorWithHashtagsSolution.js';
import EditorWithMentionsSolution from './solutions/3/EditorWithMentionsSolution.js';
import EditorUsingMentionPluginSolution from './solutions/4/EditorUsingMentionPluginSolution.js';

import 'draft-js/dist/Draft.css';

const App = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/tasks/0' />
      <Route path='tasks'>
        <Route path='0' component={PlainTextEditor}/>
        <Route path='1' component={RichTextEditorWithButton}/>
        <Route path='2' component={EditorWithHashtags}/>
        <Route path='3' component={EditorWithMentions}/>
        <Route path='4' component={EditorUsingMentionPlugin}/>
      </Route>
      <Route path='solutions'>
        <Route path='0' component={PlainTextEditorSolution}/>
        <Route path='1' component={RichTextEditorWithButtonSolution}/>
        <Route path='2' component={EditorWithHashtagsSolution}/>
        <Route path='3' component={EditorWithMentionsSolution}/>
        <Route path='4' component={EditorUsingMentionPluginSolution}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
