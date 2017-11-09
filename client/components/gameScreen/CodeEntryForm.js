//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai'

export class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props)


  }
  onChange(newValue) {
    console.log('change',newValue);
  }

  render() {
    console.log('SEEEEEEEED CODE' + this.props.seedCode)
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange.bind(this)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          enableSnippets={true}
          value={`/*enter your code here*/`}
        />
      </div>
    )
  }
}

export default CodeEntryForm;