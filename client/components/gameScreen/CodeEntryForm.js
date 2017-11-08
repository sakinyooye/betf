//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';

export class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props)


  }
  onChange(newValue) {
    console.log('change',newValue);
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="github"
          onChange={this.onChange.bind(this)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{$blockScrolling: true}}
        />
      </div>
    )
  }
}

export default CodeEntryForm;