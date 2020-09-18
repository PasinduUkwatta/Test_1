import React, { Component } from "react";
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from '../components/navbar/navbar.profile.component'

class EmailConfirm extends Component {

 constructor(props) {
        super (props)

        this.state ={
            conformationcode: '',
        }
        this.changeHandler = this.changeHandler.bind(this);
       
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }




    render() {
         const{conformationcode} = this.state

        return (
            <div>
            <Navbar />
          

  
            <form onSubmit={this.submitHandler} >
                <h3>Confirm the Email</h3>

                  <div className="form-group">
                    <label>Coformation Code</label>
                    <input 
                    type="text" 
                    name ="conformationcode"
                    className="form-control" 
                    placeholder="Enter Confirmation Code" 
                    value={conformationcode} 
                    onChange={this.changeHandler}  />
                </div>

               

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Submit</button>

            </form>
            </div>
            
        )
    }
}


export default (EmailConfirm)
