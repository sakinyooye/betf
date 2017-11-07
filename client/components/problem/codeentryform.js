//codeentryform.js
// this file will just house the code entry. It takes the starterCode from app.js
import React from 'react';
import axios from 'axios'

export class Lander extends React.Component {
	constructor(props) {

this.getRandomAlgorithm = async () => {
  let local = 'http://localhost:3000'
  // need to add a process.env variable here.  
  // the extension requests and stores all of the algorithms of a given skill level. 
  let extension = ''

  completeRequest = 
  var storeData = await axios.get(completeUrl);
  storeData = storeData.data; 
  console.log('storeData', storeData[0])
  this.setState({storeData}) 
  return storeData; 
}


	}
	render() {






	}



}

export default Lander