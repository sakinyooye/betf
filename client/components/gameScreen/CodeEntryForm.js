//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'
import brace from 'brace';
import ReactAce from 'react-ace-editor';
import AceEditor from 'react-ace'
import SubmitButton from './SubmitButton.js' 
import Timer from './Timer.js'

import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai'

export class CodeEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: "",
      reset : "", 
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue,e) {
    event.preventDefault();
    const editor = this.ace.editor; // The editor object is from Ace's API
    this.state.value = editor.getValue()
    console.log(this.state.value)
    // this.setState({reset : editor})
    
  }

  render() {
  // this displays 'loading...' until the seedcode has loaded from the gameFrame. 
  return (this.props.seedCode !== null) ? 
    (<div>
        <div>
          <AceEditor
            mode="javascript"
            theme="monokai"
            setReadOnly= {false}
            onChange={this.onChange}
            value = {this.props.seedCode}
            defaultValue = {`this.props.seedCode`}
            style={{ height: '100px' }}
            ref={instance => { this.ace = instance; }} // Let's put things into scope
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            enableSnippets={true}
          />
        </div>
        <SubmitButton value={this.state.value}
         tests={this.props.tests} 
         algo={this.props.algo}
         reset={this.state.reset}/>
      </div>
    ) : (<div> loading... </div>)
  }
}

export default CodeEntryForm;