import React from 'react';
import Lander from '../components/landing/landing.js';


//all components will be attached to this Page component. 
//Page component will be rendered to the html file
class Page extends Component {
    render(){
        return(
            <h2>
            <Lander />
            </h2>
        )
    }

}

RenderDOM.render(<h1>Main.js</h1>, document.getElementById('mount'))    