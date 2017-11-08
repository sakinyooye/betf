var React = require('React');
var axios = require('axios');

export class Game extends React.Component {
	constructor(props) {
		super(props);


	};

	handleClick(){
		var getRequestData = {
			url: '/problem',
			method: 'post',
			data: {
				username: this.props.game.username,
				algorithmId: this.props.game.algorithmId,
				participants: this.props.game.participants,
				leaderboard: this.props.game.leaderboard,
				status: this.props.game.status,
				playerScores: this.props.game.playerScores
			}
		};

		axios(getRequestData).then(function(response){
			console.log(response);

		}).catch(function(error){
			console.log(error);
		})
	};

	render(){
		return (<div onClick={this.handleClick.bind(this)} >{this.props.game.name}</div>)
	};
}

export default Game; 

