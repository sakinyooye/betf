import React from 'react';
var axios = require('axios');

class Lander extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            passWord: "",
            authenSucces: null
        }
    }

    //handle username submission and updates state
    handleUsername(event) {
        this.setState({
            userName: event.target.value
        })
    }

    //handle password submissoin and updates state
    handlePassword(event) {
        this.setState({
            passWord: event.target.value
        })
    }

    //handle axios request
    handleCheck() {
        axios.post('/login', {
            userName: this.state.userName,
            passWord: this.state.passWord
        })
        .then((response) => this.setState({
            authenSucces: response.data
        }))
    }
    
    render(){
        return(
            <div>
                <form>
                    Username:
                    <input type="text" value={this.state.userName} onChange={this.handleUsername.bind(this)}/>
                    Password:
                    <input type="text" value={this.state.passWord} onChange={this.handlePassword.bind(this)}/>
                    <button onClick={this.handleCheck.bind(this)}>Submit</button>

                </form>
            </div>
        )
    }

}

export default Lander