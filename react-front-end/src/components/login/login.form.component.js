import React, { Component } from "react";
import {  withRouter} from 'react-router-dom';
import GoogleAuth from "../GoogleAuth";
import {login} from "../userFunctions.component";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class LoginForm extends Component{


constructor(props) {
        super (props)

        this.state ={
            email: '',
            password: '',
            data:[]
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
       
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }


       submitHandler = e => {
        e.preventDefault()
       


        const loginUser ={
            email: this.state.email,
            password: this.state.password,
            data: this.state.data
        }
        console.log(loginUser)

        login(loginUser).then(res=>{

        })



        }
  


	render(){

		const{email, password} = this.state

		return(
			<div>
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
                    onChange={this.changeHandler}
                    validations={[required]}
                    />
                    
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
                Sign In
                </button>
                
            </form>
                <br />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <GoogleAuth />
                </div>



			</div>)
	}

}

//const mapStateToProps =(state) =>{
 //   return{usersLogin :state.usersLogin}
//}

export default (withRouter(LoginForm))




                    