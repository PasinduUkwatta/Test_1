import React, { Component } from "react";
import axios from "axios"

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
        this.props.history.push('/business')
        console.log(this.state)
        axios.post('/address',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }
    
   
    render() {
        const{line1,line2, postalcode,city,state,country} = this.state

        return (
            <form onSubmit={this.submitHandler} >
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
                </div>


                <button type="submit" className="btn btn-primary btn-block" action ="detail">Sign Up</button>

            </form>
        )
    }
}


export default (Address)
