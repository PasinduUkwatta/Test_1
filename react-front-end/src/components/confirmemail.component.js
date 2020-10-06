import React, { Component } from "react";
import axios from "axios"

class EmailConfirm extends Component {

 constructor(props) {
        super (props)
     console.log(props)

        this.state ={
            firstname:'',
            lastname :'',
            email:'',
            password: '',
            confirmcode:''

        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

 }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler(e) {

        e.preventDefault()

        const userSignUp = {
            firstname: localStorage.getItem('firstname'),
            lastname: localStorage.getItem('lastname'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            confirmcode :this.state.confirmcode
        }

        let confirmDetails ={
            firstname:userSignUp.firstname,
            lastname:userSignUp.lastname,
            email:userSignUp.email,
            password:userSignUp.password,
        }

        if(this.state.confirmcode===localStorage.getItem('code')){
            console.log("correct code")
            console.log(userSignUp.firstname)
            console.log(typeof (userSignUp.firstname))

            console.log(userSignUp.lastname)
            console.log(userSignUp.email)
            console.log(userSignUp.password)
            axios.post("/confirm",
                (confirmDetails))
                .then(response =>{
                    console.log(response)
                    window.location = "/address"


                })

            //confirmSignUp(userSignUp).then(res => {
            //    this.props.history.push("/profile")
            //    console.log("details saved")
           // })
        }
        else{
            console.log("wrong code")

        }






    }




    render() {
         const {confirmcode} = this.state

        return (
            <div>



            <form onSubmit={this.submitHandler} >
            <h3>{this.props.valuesFromSignUp}</h3>

                <h3>Confirm the Email</h3>

                <div className="form-group">
                    <label>Confirm Code</label>
                    <input
                        type="text"
                        name ="confirmcode"
                        className="form-control"
                        placeholder="Enter confirm Code"
                        value={confirmcode}
                        onChange={this.changeHandler}  />
                </div>



               

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>

            </form>
            </div>
            
        )
    }
}


export default (EmailConfirm)
