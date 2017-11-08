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
        console.log(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
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

    handleCheck(event) {
        event.preventDefault(); 
        axios.post('/login', {
            userName: this.state.userName,
            passWord: this.state.passWord
        })
        .then((response) => {
            // this changes the state of the main.js this.state.user and triggers a
            // rerender. 
            
            this.props.setUser(this.state.userName)
            this.setState({
                authenSucces: response})
            })
        .catch(function (error) {
            this.props.setUser('no')
        })
    }


    
    render(){
        return(
            <div>
                <form>
                    Username:
                    <input type="text" value={this.state.userName} onChange={this.handleUsername}/>
                    Password:
                    <input type="text" value={this.state.passWord} onChange={this.handlePassword}/>
                    <button onClick={this.handleCheck}>Submit</button>

                </form>
                <div>
                    
                </div>
            </div>
        )
    }

}

export default Lander