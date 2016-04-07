import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';

import PlainTextEditor from './tasks/1/PlainTextEditor.js';
import RichTextEditor from './tasks/2/RichTextEditor.js';
import RichTextEditorWithButton from './tasks/2/RichTextEditorWithButton.js';
import EditorWithHashtags from './tasks/3/EditorWithHashtags.js';
import EditorWithMentions from './tasks/4/EditorWithMentions.js';

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
      <Route path="1" component={RichTextEditor}/>
      <Route path="2" component={RichTextEditorWithButton}/>
      <Route path="3" component={EditorWithHashtags}/>
      <Route path="4" component={EditorWithMentions}/>
    </Route>
  </Router>
), document.getElementById('root'));
