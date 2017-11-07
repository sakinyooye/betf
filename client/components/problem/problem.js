var React = require('React');
var ReactDom = require('react-dom');


class Problem extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<Prompt promptdetails={props.promptdetails} />
				<CodeEntryForm />
				<SubmitButton />
			</div>
		)
	}
}

/*requires props to be passed in*/

ReactDOM.render(<Problem promptdetails={XYZ} />, document.getElementById('problem'));