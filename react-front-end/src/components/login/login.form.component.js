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
       
        console.log(this.state);

        const loginUser ={
            email: this.state.email,
            password: this.state.password,
            data: this.state.data
        }
        console.log(loginUser)

        login(loginUser).then(res=>{
            this.props.history.push('/profile')
        })

        // axios.post('/sign-in',this.state,{
        //     headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json'
        // }
        // })
        //     .then(response => {
        //         console.log(response)
        //
        //         this.setState({data:this.state.response.data});
        //
        //
        //
        //
        //
        //
        //         //getting the jwt from the responce from the backend
        //         //var token = response.data.substring(responceData.indexOf(']')+1, )
        //         //console.log("Json Web Token :"+token)
        //
        //         //getting the payments data according to the user from the backend responce
        //         //var userData =response.data.substring(0,responceData.indexOf(']'))
        //         //console.log("Payments Data :"+userData)
        //
        //
        //
        //
        //         if(response.data===[]){
        //             this.props.history.push('/payment')
        //             console.log("User did not have any payment yet")
        //         }
        //
        //         else if(response.data ==="user details are invalid"){
        //             this.props.history.push('/sign-up')
        //             console.log("Please Try Again")
        //
        //         }
        //
        //         else{
        //
        //             console.log("Welcome to the site")
        //             this.props.history.push({
    	// 						pathname: '/profile',
    	// 						state: { userState: this.state }
        //             })
        //
        //
        //
        //             axios.post('/jwt-generate',this.state,{
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     Accept: 'application/json'
        //                 }
        //             })
        //                 .then(response => {
        //                     var accessTokenLogin =response.data
        //                     console.log(accessTokenLogin)
        //                     console.log("this is the responce from the login")
        //
        //                 })
        //                 .catch(error => {
        //                         console.log(error.response)
        //
        //                         console.log("Please Try Again")
        //                         this.props.history.push('/sign-in')
        //                     }
        //
        //                 )
        //
        //         }
        //
        //
        //     })
        //     .catch(error => {
        //         console.log(error)
        //
        //         console.log("Please Try Again")
        //         this.props.history.push('/sign-in')
        //     }
        //
        // )





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




                    