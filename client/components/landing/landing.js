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

    handleUsername(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handlePassword(event) {
        this.setState({
            passWord: event.target.value
        })
    }

    handleCheck(event) {
        axios.post('dummy', {
            userName: this.state.userName,
            passWord: this.state.passWord
        })
    }
    
    render(){
        return(
            <div>
                <form>
<<<<<<< HEAD
                    Username:<br/>
                    <input type="text" value={this.state.userName} onChange={this.handleUsername.bind(this)}/>
                    Password:<br/>
                    <input type="text" value={this.state.passWord} onChange={this.handlePassword.bind(this)}/>
                    <br/>

                    <button onClick={this.handleCheck.bind(this)}>Submit</button>

=======
                    Username:
                    <input type="text" name="firstname"/>
                    Password:
                    <input type="text" name="lastname"/>
                   
                    <button >Submit</button>
>>>>>>> workingR
                </form>
            </div>
        )
    }

}

export default Lander