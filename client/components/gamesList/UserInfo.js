var React = require('React');
var axios = require('axios');

export class UserInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<div> Username: {this.props.username} Points: {this.props.points} Level: {this.props.level}</div>
			</div>
		)
	}
}

export default UserInfo; 