import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.profile.component'

class SignOut extends Component { 
    constructor(props){
      super (props)
    
    }


  onButtonClickHandler = () => {
    alert('Sign -Out from The Site')
    this.props.history.push('/')

  };
    render() {
       

        return (
            <div>
            <Navbar />
          

  
            <form onSubmit={this.submitHandler} >
            
                <h3>SignOut</h3>
               
                <button
                onClick={this.onButtonClickHandler}
                type="submit" 
                className="btn btn-primary btn-block" 
                action ="detail">Sign-out</button>
                

            </form>
            </div>
            
        )
    }
}


export default (SignOut)