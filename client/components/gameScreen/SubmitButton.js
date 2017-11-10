//submit button.js
import React from 'react';
import axios from 'axios'
import Result from './Result.js';
import Timer from './Timer.js';

export class SubmitButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			// valueFromEditor: this.props.value,
			result: ""
		}
		this.onClick = this.onClick.bind(this)
	}
	
	onClick(e){

		this.props.submit(() => {
			console.log("entryForm Data: ", this.props.value)
		axios.post('/test', {
			value: this.state.valueFromEditor,
			tests: this.props.tests,
			algo: this.props.algo
		})
		.then( res => {
			console.log('RES', res.data.testResults)

			
			axios.post('/test', {
				value: this.props.value, 
				tests: this.props.tests, // Game.testingSuite  GETTING THIS
				algo: this.props.algo //algorithmID 	GETTING THIS
			})

			.then(res => {
				console.log('RES', res.data.testResults)
				this.setState({ result : res.data})
			})

		})
	}


// on recieve props, we want the state to change

	render(){
		return (
			<div>
				<button className="btn waves-effect waves-light"  onClick={this.onClick}>Submit</button>
				<div>
				<Result sub={this.state.result}/>
				</div>
				<div>
				{/* <Timer testFun={this.onClick}/> */}
				</div>
			</div>
		)
	}
}

export default SubmitButton