# DraftJS Workshop

## Instructions

This application requires Node.js installed. Node.js can be downloaded at from
[https://nodejs.org/](https://nodejs.org/).

Clone this repo:

```sh
git clone https://github.com/jaaberg/draft-js-workshop.git
```

Install dependencies. (A one-time operation.)

```sh
npm install
```

Start the development server.

```sh
npm start
```

# Tasks

## Task 0: Creating your first Draft.js editor

_[http://localhost:3000/tasks/0](http://localhost:3000/tasks/0)_

**Create a Plain text editor with Draft.js.**

You need an `Editor` component which has an `onChange` property that you should
use to update the editors state. You also need to pass the editor an instance
of `EditorState` (`EditorState.createEmpty`)

* [Draft.js documentation overview](https://facebook.github.io/draft-js/docs/overview.html)


## Task 1: Taking it a step further

_[http://localhost:3000/tasks/1](http://localhost:3000/tasks/1)_

**Create a Rich text editor with Draft.js.**

In this task, the editors `handleKeyCommand` property will be come in use.
Also, the `RichUtils.handleKeyCommand()`, which holds information about the
most basic key commands such as bold, italics and underscore will be needed.

You've been given the solution from the last task and a button to log the
state to console if you are interested in how draft is storing the editors
state.

* [RichUtils documentation](https://facebook.github.io/draft-js/docs/quickstart-rich-styling.html#richutils-and-key-commands)

## Task 2: I want hashtags like Twitter

_[http://localhost:3000/tasks/2](http://localhost:3000/tasks/2)_

**Create an editor that changes the color of hashtags.**

We want to change the color of hashtags. For this task you need to pass a
`CompositeDeorator` to the editorstate you are creating. The `CompositeDecorator`
accepets a list of `{decoratorComponent, strategy}` objects. Draft.js is using the
stragegy to search a given `ContentBlock` for ranges of text that matches
the given strategy. The strategy could for instance be a regex. For the
decorated ranges of text that you find with the strategy, you need to give
a component, the `DecoratorComponent`. They tend to be spans, and is passed
the range of decorated text as `props.children`.

* [Decorator documentation](https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html)


## Task 3: Oh, give me those nice Facebook mentions

_[http://localhost:3000/tasks/3](http://localhost:3000/tasks/3)_

**Implement name suggestions when @ is typed.**

This task is pretty similar to the previous one. This time, you are going
to suggest names when we type @ in the editor. Use the `NAMES` list and match
by `startsWith()` that is a default string method in JS. The decorator component
is passed `decoratedText` via props.

## Task 4: What if someone else did the dirty work?

_[http://localhost:3000/tasks/4](http://localhost:3000/tasks/4)_

**Implement complete functional mentions with `draft-js-plugins`.**

For this task, you will use the `draft-js-plugins` package to do the hard parts
for you. This is a plugin-based editor where contributors have written complete
plugins for you to use.

* [draft-js-plugins documentation](https://www.draft-js-plugins.com/).

##Solutions

You find solutions under `src/solutions/` in the project folder, and 
`localhost:3000/solutions/<tasknumber>` in your browser. 