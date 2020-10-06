import React, { Component } from "react";
import { withRouter} from 'react-router-dom';
import axios from "axios"

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

        localStorage.setItem('firstname',this.state.firstname)
        localStorage.setItem('lastname',this.state.lastname)
        localStorage.setItem('email',this.state.email)
        localStorage.setItem('password',this.state.password)

        console.log(this.state)


        // const newUser ={
         //     firstname: this.state.firstname,
         //     lastname: this.state.lastname,
         //     email: this.state.email,
         //     password: this.state.password,
         // }
         //
         //
         // register(newUser).then(res => {
         //     this.props.history.push('/profile')
         //     console.log("sign up suceesfully done")
         // })
    


       axios.post('/sign-up',this.state)
            .then(response => {
                console.log(response)
                localStorage.setItem('code',response.data.code)





                if(response.data.message ==="OKEY"){
                    this.props.history.push('/email-confirm')
                    console.log("Details saved into the database")


                    axios.post('/jwt-generate',{
                            email :this.state.email,
                            password :this.state.password,
                        }
                    )
                        .then(response => {
                            console.log(response)
                            var accessTokenLogin =response.data.access_token

                            localStorage.setItem('accessTokenLogin',accessTokenLogin)


                        })


                    //getting the confirmation code from the backend
                    console.log("conformation code :"+response.data.code)



                }


            })


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


                <div className="ui warning message">
                    <div className="header">One Email for One User</div>
                    <ul className="list">
                        <li>You can only sign up for an account once with a given e-mail address.</li>


                    </ul>
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

                <div className="ui warning message">
                <div className="header">Enter Correct Password with Requirement!</div>
                <ul className="list">
                <li>Password should Contain at least 8 charactors</li>
                <li>At Least one Capital Letter</li>
                <li>At Least one Special charactor (@ , $ , _ )</li>
                
                </ul>
                </div>

                <button type="submit">
                <div className="ui animated button" tabIndex="5">
                    <div className="visible content">Next</div>
                    <div className="hidden content">
                    <i className="right arrow icon"></i>
                    </div>
                    </div>
                   

                </button>

            </form>


			</div>)
	}

}

export default withRouter(SignUpForm)