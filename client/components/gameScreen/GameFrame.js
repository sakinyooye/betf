import React from 'react';
import axios from 'axios';
import Timer from './Timer.js'; 
import Prompt from './Prompt.js'; 
import CodeEntryForm from './CodeEntryForm.js'
import Tests from './Tests' // this needs a file
import Xonsole from './Xonsole' // because 'Console' isn't a reserved word but it should be.
import RunXonsoleButton from './RunXonsoleButton' // this needs a file
import SubmitButton from './SubmitButton.js' // this needs a file
// this receives the following props from the 'GamesList': 
			// game object with: 
				// algorithm: _id
				// participants
				// leaderboard
				// status
				// playerScores

export class GameFrame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			algorithm : null, 
      prompt : null, 
      seedCode : null, 
      tests : null, 
      isSubmitted : false, 
      isXonsoleRun : false, 
      isTimerRunning : false, 
    }

    this.algorithmID = this.props.gameObject.algorithmID
    this.getAlgorithm = this.getAlgorithm.bind(this)
    this.getSeedCode = this.getSeedCode.bind(this)
    this.getTests = this.getTests.bind(this)
    this.toggleSubmitStatus = this.toggleSubmitStatus.bind(this)
    this.toggleRunXonsoleStatus = this.toggleRunXonsoleStatus.bind(this)

	}


  getAlgorithm = async (algoId) => {
		// need to add a process.env variable here. 
  	let local = 'http://localhost:3000'
	  let extension = '/algos/' + algoId
	  let algorithm = axios.get(local + extension) // TODO: change from local to process.env on deployment.
	  this.setState({algorithm}) 
	  // return this so that it can be reused in getPrompt. 
	  return algorithm; 
  }

  // these could be refactored into one function, but I think it is more readable to have them seperate. 
	getPrompt = async (algoId) => {
			var retrievedAlgo = await this.getAlgorithm(algoId)
			var prompt = retrievedAlgo.prompt
		this.setState({prompt})
	}

	getSeedCode = async (algoId) => {
		var retrievedAlgo = await this.getAlgorithm(algoId)
		var seedCode = retrievedAlgo.seedCode; 
		this.setState({seedCode})
	}

	getTests = async (algoId) => {
		var retrievedAlgo = await this.getAlgorithm(algoId)
		var tests = retrievedAlgo.tests; 
		this.setState({tests})
	}

	// both of these functions handle the pressing of the buttons. When they are pressed, they change the state
	// of the GameFrame, triggering a rerendering and passing down a true value to their respective children. 
	// after the child acts on the status change, it will call the function again, setting the state back to false. 
	// These must be ES5 functions because arrow functions will result in the this binding getting messed up. 
	toggleSubmitStatus = function() {
		this.setState({isSubmitted : !this.state.isSubmitted})
	}
	toggleRunXonsoleStatus = function() {
		this.setStatt({isXonsoleRun : !this.state.isXonsoleRun})
	}

	componentWillMount() {
		// on the first mounting of the game frame, we want to render the game. 
		this.getAlgorithm(this.algorithmID)
		this.getPrompt(this.algorithmID)
		this.getSeedCode(this.algorithmID)
		this.getTests(this.algorithmID)
	}	

	render(props){
		return (
			<div className="stack">
			<div>
				<Timer />
				<Prompt promptdetails={this.state.prompt} />
				<CodeEntryForm seedCode = {this.state.seedCode} />
			</div> 
			<div className="inline-block-div"> 
				<Tests tests={this.state.tests}/> 
				<Xonsole toggleRunXonsoleStatus={this.toggleRunXonsoleStatus} isXonsoleRun={this.state.isXonsoleRun}/>
				<RunXonsoleButton toggleRunXonsoleStatus={this.toggleRunXonsoleStatus}/>  
				<SubmitButton toggleSubmitStatus={this.toggleSubmitStatus} isSubmitted={this.state.isSubmitted} isTimerRunning = {this.state.isTimerRunning}/>
			</div>
		)
	}
}

export default GameFrame; 