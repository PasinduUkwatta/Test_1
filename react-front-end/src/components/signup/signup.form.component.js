import React, { Component } from "react";
import axios from "axios"
import { Route , withRouter} from 'react-router-dom';

class SignUpForm extends Component{

     constructor(props) {
        super (props)

        this.state ={
            firstname:'',
            lastname :'',
            email:'',
            password: '',
            
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

   
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    

        
        axios.post('/sign-up',this.state)
            .then(response => {
                console.log(response)
                
                //getting "OKEY" from the responce from the backend
                var res = response.data.substring(0, 4);
                if(res =="OKEY"){
                    this.props.history.push('/email-confirm')
                    console.log("Details saved into the database")

                    //getting the confirmation code from the backend
                    console.log("conformation code :"+response.data.substring(5,11))

                    //getting the JWT from the backend responce
                    console.log("Json Web Token :"+response.data.substring(12,))

                }
                else{
                    this.props.history.push('/sign-up')
                    console.log("Please Try Again")

                }

            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }

	render(){
                const{firstname,lastname,email,password} = this.state

		return(
			<div>
			<form onSubmit={this.submitHandler} >
             <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                     <input 
                    type="text" 
                    name ="firstname"
                    className="form-control" 
                    placeholder="Enter First Name" 
                    value={firstname} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                     <input 
                    type="text" 
                    name ="lastname"
                    className="form-control" 
                    placeholder="Enter Last Name" 
                    value={lastname} 
                    onChange={this.changeHandler}  />
                </div>

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
                <div class="ui form error">
 
                  <div class="ui error message">
                    <div class="header">Action Forbidden</div>
                    <p>You can only sign up for an account once with a given e-mail address.</p>
                  </div>
                  
                </div>

                <div className="form-group">
                    <label>Password</label>
                     <input 
                    type="password" 
                    name ="password"
                    className="form-control" 
                    placeholder="Enter Password" 
                    value={password}
                    onChange={this.changeHandler}  />
                </div>

                <div class="ui warning message">
                <div class="header">Enter Correct Password with Requirement!</div>
                <ul class="list">
                <li>Password should Contain at least 8 charactors</li>
                <li>At Least one Capital Letter</li>
                <li>At Least one Special charactor (@ , $ , _ )</li>
                
                </ul>
                </div>

                <button type="submit">
                <div class="ui animated button" tabindex="5">
                    <div class="visible content">Next</div>
                    <div class="hidden content">
                    <i class="right arrow icon"></i>
                    </div>
                    </div>
                   

                </button>

            </form>


			</div>)
	}

}

export default withRouter(SignUpForm)