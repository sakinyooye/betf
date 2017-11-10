//submit button.js
import React from 'react';
import axios from 'axios'
import Result from "./Result.js"

export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			valueFromEditor: this.props.value,
			result: ""
		}
	this.onClick = this.onClick.bind(this)
		
	}
	onClick(e){
		axios.post('/test', {
			value: this.state.valueFromEditor,
			tests: this.props.tests
		})
		.then( res => {
			this.setState({ result: res.data})
		})
		alert(this.props.value)
		this.props.reset.setValue();
		event.preventDefault();
	}

	render(){
		
		return (
			<div>
				<button className="btn waves-effect waves-light"  onClick={this.onClick}>Submit</button>
				<div>
				<Result sub={this.state.result}/>
				</div>
			</div>
		)
	}
}

export default SubmitButton