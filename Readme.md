# React JS Froala WYSIWYG Editor

[![npm](https://img.shields.io/npm/v/react-froala-wysiwyg.svg)](https://www.npmjs.com/package/react-froala-wysiwyg)
[![npm](https://img.shields.io/npm/dm/react-froala-wysiwyg.svg)](https://www.npmjs.com/package/react-froala-wysiwyg)
[![npm](https://img.shields.io/npm/l/react-froala-wysiwyg.svg)](https://www.npmjs.com/package/react-froala-wysiwyg)

>react-froala-wyswiyg provides React bindings to the Froala WYSIWYG editor VERSION 3.

## Installation

```bash
npm install react-froala-wysiwyg --save
```

## Update editor version
```bash
npm update froala-editor
```

## Usage

#### 1. Require and use Froala Editor component inside your application.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';


// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
// import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
// import 'froala-editor/js/third_party/image_tui.min.js';
// import 'froala-editor/js/third_party/embedly.min.js';
// import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

// Render Froala Editor component.
ReactDOM.render(<FroalaEditorComponent tag='textarea'/>, document.getElementById('editor'));
```

#### Add editor to UI by passing id to html element

```
<div  id="editor">
</div>
```

#### 2. Make sure you have the right Webpack settings for loading the CSS files.

#### Webpack <= 3
```js
var webpack = require("webpack");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react','es2015', 'stage-2']
        }
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader?root=."
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  }
};

```


#### Webpack 4
```js
var webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react','es2015', 'stage-2']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  }
};

```

#### Pass properties to the wrapping DOM element

```js
<FroalaEditor
  tag='textarea'
  config={this.config}
  model={this.state.model}
  onModelChange={this.handleModelChange}
/>
```

**tag** attr is used to tell on which tag the editor is initialized.

There are special tags: **a**, **button**, **img**, **input**. Do not use them in FroalaEditor component. To initialize the editor on a special tag, use `FroalaEditorA`, `FroalaEditorButton`, `FroalaEditorImg` and `FroalaEditorInput` components.


### Config

You can pass editor options as component attribute (optional).

`config={this.config}`

You can pass any existing Froala option. Consult the [Froala documentation](https://www.froala.com/wysiwyg-editor/docs/options) to view the list of all the available options:

```js
config={{
  placeholderText: 'Edit Your Content Here!',
  charCounterCount: false
}}
```

Aditional option is used:
* **immediateReactModelUpdate**: (default: false) This option updates the React model as soon as a key is released in the editor. Note that it may affect performances.

### Events and Methods

Events can be passed in with the options, with a key events and object where the key is the event name and the value is the callback function.

```js
config={{
  placeholder: "Edit Me",
  events : {
    'focus' : function(e, editor) {
      console.log(editor.selection.get());
    }
  }
}}
```

Using the editor instance from the arguments of the callback you can call editor methods as described in the [method docs](http://froala.com/wysiwyg-editor/docs/methods).

Froala events are described in the [events docs](https://froala.com/wysiwyg-editor/docs/events).

### Custom Buttons

You can pass the custom buttons to the editor by following way:

```javascript
<script>
import Froalaeditor from 'froala-editor';
Froalaeditor.DefineIcon('alert', {NAME: 'info', SVG_KEY: 'help'});
  Froalaeditor.RegisterCommand('alert', {
    title: 'Hello',
    focus: false,
    undo: false,
    refreshAfterCallback: false,
    callback: function () {
      alert('Hello!');
    }
  });

  Froalaeditor.DefineIcon('clear', {NAME: 'remove', SVG_KEY: 'remove'});
  Froalaeditor.RegisterCommand('clear', {
    title: 'Clear HTML',
    focus: false,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.set('');
      this.events.focus();
    }
  });

  Froalaeditor.DefineIcon('insert', {NAME: 'plus', SVG_KEY: 'add'});
  Froalaeditor.RegisterCommand('insert', {
    title: 'Insert HTML',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      this.html.insert('My New HTML');
    }
  });
  </script>
  
 ```
 Now you can use these buttons in options:
 ```javascript
 toolbarButtons: [['undo', 'redo' , 'bold'], ['alert', 'clear', 'insert']],

 ```

### Model

The WYSIWYG HTML editor content model.

`model = {this.state.model}`

Two way binding:

```jsx
import React from 'react';

class EditorComponent extends React.Component {
  constructor () {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Example text'
    };
  }

  handleModelChange: function(model) {
    this.setState({
      model: model
    });
  }

  render () {
    return <FroalaEditor
			  model={this.state.model}
			  onModelChange={this.handleModelChange}
           />
  }
}
```

To achieve one way binding and pass only the initial editor content, simply do not pass `onModelChange` attribute.

Use the content in other places:

```js
<input value={this.state.model}/>
```

### Special tags
You can also use the editor on **img**, **button**, **input** and **a** tags:

```js
<FroalaEditorImg
  config={this.config}
/>
<FroalaEditorButton
  config={this.config}
/>
<FroalaEditorInput
  config={this.config}
/>
<FroalaEditorA
  config={this.config}
/>
```

The model must be an object containing the attributes for your special tags. Example:

```js
constructor () {
  super();

  this.handleModelChange = this.handleModelChange.bind(this);

  this.state = {
    model: {src: 'path/to/image.jpg'}
  };
}
```

* The model can contain a special attribute named **innerHTML** which inserts innerHTML in the element: If you are using 'button' tag, you can specify the button text like this:

```js
this.state = {
  model: {innerHTML: 'Click Me'}
};
```
As the button text is modified by the editor, the **innerHTML** attribute from buttonModel model will be modified too.

#### Specific option for special tags

* **reactIgnoreAttrs**: (default: null) This option is an array of attributes that you want to ignore when the editor updates the froalaModel:

 ```js
config: {
  reactIgnoreAttrs: ['class', 'id']
},
 ```

## Manual Instantiation

Gets the functionality to operate on the editor: create, destroy and get editor instance. Use it if you want to manually initialize the editor.

`onManualControllerReady={this.handleManualController}`

```js
handleManualController: function(initControls) {
  //...
}
```

The object received by the function will contain the following methods:

- **initialize**: Call this method to initialize the Froala Editor
- **destroy**: Call this method to destroy the Froala Editor
- **getEditor**: Call this method to retrieve the editor that was created. This method will return *null* if the editor was not yet created

## Using type definition file
`index.d.ts` file is the type definition file for this repository. It is placed inside lib folder.In order to use it in your code , use the following line:
```
///<reference path= "index.d.ts" />
```
where path is the location of index.d.ts file.

## Displaying HTML

To display content created with the froala editor use the `FroalaEditorView` component.

```js
<FroalaEditor
  model={this.state.content}
  onModelChange={this.handleModelChange}
/>
<FroalaEditorView
  model={this.state.content}
/>
```


## License

The `react-froala-wyswiyg` project is under MIT license. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.

Froala Editor has [3 different licenses](http://froala.com/wysiwyg-editor/pricing) for commercial use.
For details please see [License Agreement](http://froala.com/wysiwyg-editor/terms).

## Development environment setup

If you want to contribute to react-froala-wyswiyg, you will first need to install the required tools to get the project going.

#### Prerequisites

* [Node Package Manager](https://npmjs.org/) (NPM)
* [Git](http://git-scm.com/)

#### Install dependencies

    $ npm install

#### Build

    $ npm run build

#### Run Demo

    $ npm run demo
