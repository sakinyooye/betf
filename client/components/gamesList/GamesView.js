var React = require('React');
var axios = require('axios');

import UserInfo from './UserInfo.js';
import GamesList from './GamesList.js';

export class GamesView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			points: 1000,
			level: 2,
			games: undefined;
		};
	};

	componentDidMount(){
		var host = localhost:3000;
		axios.get(localhost + '/games')
		.then(function(result){
			this.state.games = result;
		})
		.catch((err) => throw err);
	};

	render(){
		return (
			<div>
				<UserInfo username={props.username} points={this.state.points} level={this.state.level}/>
				<GamesList gameslist={this.state.games} username={props.username}/>

			</div>
		)
	}
}

export default GamesView; 

