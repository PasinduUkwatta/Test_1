import React, { Component } from "react";
import axios from "axios"

export default class Login extends Component {

    constructor(props) {
        super (props)

        this.state ={
            email: '',
            password: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
       
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

     submitHandler = e => {
        e.preventDefault()
        this.props.history.push('/sign-up')
        console.log(this.state)
        axios.get('/sign-in-get-without-hash',this.state)
            .then(response => {
                var result = response.data
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }
  

    render() {
        const{email, password} = this.state

        return (
            <form onSubmit={this.submitHandler}  >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    type="email" 
                    name ="email"
                    className="form-control" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={this.changeHandler}  />
                </div>

                
                <button 
                type="submit" 
                className="btn btn-primary btn-block">
                Submit
                </button>
                
            </form>
        );
    }
}
