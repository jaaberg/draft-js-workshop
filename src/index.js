import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import PlainTextEditor from './tasks/0/PlainTextEditor.js';
import RichTextEditorWithButton from './tasks/1/RichTextEditorWithButton.js';
import EditorWithHashtags from './tasks/2/EditorWithHashtags.js';
import EditorWithMentions from './tasks/3/EditorWithMentions.js';
import EditorUsingMentionPlugin from './tasks/4/EditorUsingMentionPlugin.js';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/0" />
      <Route path="0" component={PlainTextEditor}/>
      <Route path="1" component={RichTextEditorWithButton}/>
      <Route path="2" component={EditorWithHashtags}/>
      <Route path="3" component={EditorWithMentions}/>
      <Route path="4" component={EditorUsingMentionPlugin}/>
    </Route>
  </Router>
), document.getElementById('root'));
