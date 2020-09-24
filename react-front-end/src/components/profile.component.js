import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.profile.component'

class Profile extends Component { 
    constructor(props){
      super (props)
      console.log(this.props.userState)
      
    }
    render() {
       

        return (
            <div>
            <Navbar />
          

  
            <form onSubmit={this.submitHandler} >
            <h3>{this.props.valueFromSignIn}</h3>
                <h3>Profile</h3>
                <div >
                    <label>First Name</label> {this.email}<br />
                    <label>Last Name</label> {this.email}<br />
                    <label>Email</label>{this.email}<br />
                    <label>Business Name</label> {this.email}<br />
                    <label>Address</label> {this.email}<br />
                    
                     
                </div>

               

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Okey</button>

            </form>
            </div>
            
        )
    }
}


export default (Profile)
