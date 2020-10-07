import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.profile.component'
import axios from 'axios'

class Profile extends Component { 



    onButtonClickHandler = () => {

          axios.post('/protected',this.state,{
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json'
                        }
                    })
                        .then(response => {
                            var accessTokenLogin =response.data
                            console.log(accessTokenLogin)
                            console.log("this is the responce from the login")

                        })
                        .catch(error => {
                                console.log(error.response)

                                console.log("Please Try Again")
                                this.props.history.push('/sign-in')
                            }

                        )




    this.props.history.push('/sign-out')

  };
    render() {
       

        return (
            <div>
            <Navbar />
          

  
            <form onSubmit={this.submitHandler} >
            <h3>{this.props.valueFromSignIn}</h3>
                <h3>Profile</h3>
                <div >
                    <label>First Name</label> <br />
                    <label>Last Name</label> {this.email}<br />
                    <label>Email</label>{this.email}<br />

                    
                     
                </div>

               

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    action ="detail" onClick={()=>{this.props.history.push('/address')}}
                >Okey
                </button>

            </form>
            </div>
            
        )
    }
}


export default (Profile)
