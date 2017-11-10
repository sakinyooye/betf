//This is a component which houses a list of games

var React = require('React');
var axios = require('axios');
import Game from './Game.js';

export class GamesList extends React.Component{
	constructor(props){
		super(props);
	}

//renders each game that is returned by the '/games' route(called from GamesView.js). 
//The props are coming from the GamesView
	render(){
		return (
			<div>
				<h5> Games </h5>
					<ul >
						{this.props.gameslist.map(function(game){
							return <li className="collapsible" data-collapible="accordion"> <Game game={game} /></li>
						})}
					</ul>
			</div>
		)
	}
}

export default GamesList; 