import React, { Component } from "react";
import Navbar from '../components/navbar/navbar.profile.component'
import {address} from "./userFunctions.component";


class Address extends Component {



    constructor(props) {
        super (props)

        this.state ={
            line1:'',
            line2 :'',
            postalcode:'',
            city: '',
            state: '',
            country: ''
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

        const userAddressDetails={
            line1:this.state.line1,
            line2 :this.state.line2,
            postalcode:this.state.postalcode,
            city:this.state.city,
            state:this.state.state,
            country:this.state.country,
        }

        address(userAddressDetails).then(res=>{


        })

        }
    
   
    render() {
        const{line1,line2, postalcode,city,state,country} = this.state

        return (
            
            <div>
           
       
            <br />
            <br />
            <form onSubmit={this.submitHandler} >
            <Navbar/>
                <h3>Address Details</h3>

                <div className="form-group">
                    <label>House Number</label>
                     <input 
                    type="text" 
                    name ="line1"
                    className="form-control" 
                    placeholder="Enter Number" 
                    value={line1} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>House Lane</label>
                     <input 
                    type="text" 
                    name ="line2"
                    className="form-control" 
                    placeholder="Enter Lane Name" 
                    value={line2} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Postal Code</label>
                     <input 
                    type="text" 
                    name ="postalcode"
                    className="form-control" 
                    placeholder="Enter Postal Code" 
                    value={postalcode} 
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>City</label>
                     <input 
                    type="text" 
                    name ="city"
                    className="form-control" 
                    placeholder="Enter City Name" 
                    value={city}
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>State</label>
                     <input 
                    type="text" 
                    name ="state"
                    className="form-control" 
                    placeholder="Enter State Name" 
                    value={state}
                    onChange={this.changeHandler}  />
                </div>

                <div className="form-group">
                    <label>Country</label>
                     <input 
                    type="text" 
                    name ="country"
                    className="form-control" 
                    placeholder="Enter Country Name" 
                    value={country}
                    onChange={this.changeHandler}  />

                    

                    <div>
                    <br />
                    <br />
                    <div>
                    <button onClick={()=>{this.props.history.push('/sign-up')}}> 
                    <div className="ui animated button" tabIndex="5">
                    <div className="visible content">Back</div>
                    <div className="hidden content">
                    <i className="left arrow icon"></i>
                    </div>
                    </div>
                    </button>
                    <span> </span>
                

                    <button>
                    <div className="ui animated button" tabIndex="5">
                    <div className="visible content">Next</div>
                    <div className="hidden content">
                    <i className="right arrow icon"></i>
                    </div>
                    </div>

                    </button>

                    </div>
                    

                   
                </div>
                </div>


                

            </form>

            </div>
           
            
            
        )
    }
}


export default (Address)
