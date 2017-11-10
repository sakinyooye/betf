//This is a component which renders some user information at the top of the GamesView page
var React = require('React');
var axios = require('axios');

export class UserInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	//the props are coming from the GamesView
	render(){
		return(
			<div>
				<div> Username: {this.props.username} Points: {this.props.points} Level: {this.props.level}</div>
			</div>
		)
	}
}

export default UserInfo; 