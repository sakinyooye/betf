import React from 'react';

class Result extends React.Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <h1>
            {this.props.sub}
            </h1>
        )
    }
}

export default Result