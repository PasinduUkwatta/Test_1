import React, { Component } from "react";
import LoginForm from '../components/login/login.form.component'


class Login extends Component {



    render() {
        console.log(this.props)
    
        return (
            <div>
            <LoginForm />

            </div>

         
        );
    }
}



export default (Login)