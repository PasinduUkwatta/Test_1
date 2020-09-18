import React, { Component } from "react";
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from '../components/navbar/navbar.profile.component'

class Profile extends Component { 
    render() {

        return (
            <div>
            <Navbar />
          

  
            <form onSubmit={this.submitHandler} >
                <h3>Profile</h3>

               

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Submit</button>

            </form>
            </div>
            
        )
    }
}


export default (Profile)
