import React, { Component } from "react";
import axios from "axios"
import Navbar from '../components/navbar/navbar.profile.component'
import {business} from "./userFunctions.component";

class Business extends Component {



    constructor(props) {
        super (props)

        this.state ={
            businessname:'',
            businessownername:'',
            businessregno:'',
            contactno:'',
          
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

        const userBusinessDetails ={
            businessname:this.state.businessname,
            businessownername:this.state.businessownername,
            businessregno:this.state.businessregno,
            contactno:this.state.contactno,
        }

        business(userBusinessDetails).then(res=>{
            this.props.history.push('/sign-out')
        })




        }

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
                    }
   
    render() {
        const{businessname,businessownername,businessregno,contactno} = this.state

        return (
            <div>
            <Navbar/>
            <form onSubmit={this.submitHandler} >
                <h3>Business Details</h3>

                <div className="form-group">
                    <label>Business Name</label>
                     <input 
                    type="text" 
                    name ="businessname"
                    className="form-control" 
                    placeholder="Enter Business Name" 
                    value={businessname} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Business Owner Name</label>
                     <input 
                    type="text" 
                    name ="businessownername"
                    className="form-control" 
                    placeholder="Enter Business Owner Name" 
                    value={businessownername} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Business Reg No</label>
                     <input 
                    type="text" 
                    name ="businessregno"
                    className="form-control" 
                    placeholder="Enter Business Reg No" 
                    value={businessregno} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Contact Number</label>
                     <input 
                    type="text" 
                    name ="contactno"
                    className="form-control" 
                    placeholder="Enter Contact No " 
                    value={contactno}
                    onChange={this.changeHandler}  />
                </div>
                <div>
                    <button 
                    onClick={this.onButtonClickHandler}> 
                    <div className="ui animated button" tabIndex="5">
                    <div className="visible content">Back</div>
                    <div className="hidden content">
                    <i className="left arrow icon"></i>
                    </div>
                    </div>
                    </button>
                    <span> </span>
                
                    <button > 
                    <div className="ui animated button" tabIndex="5">
                    <div className="visible content">Next</div>
                    <div className="hidden content">
                    <i className="right arrow icon"></i>
                    </div>
                    </div>
                    </button>
                </div>

                
            </form>
            </div>
        )
    }
}


export default (Business)
