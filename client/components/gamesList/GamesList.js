var React = require('React');
var axios = require('axios');
import Game from './Game.js';

export var GamesList = (props) => {
	return (
		<div>
			<h5> Games </h5>
				<ul>
					{this.props.gamesList.map(function(game){
						return <li><Game game={game} onClick={this.handleClick} /></li>
					})}
				</ul>
		</div>
	)
}

export default GamesList; 