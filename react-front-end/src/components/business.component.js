import React, { Component } from "react";
import axios from "axios"

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
        this.props.history.push('/')
        console.log(this.state)
        axios.post('/business',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }
    
   
    render() {
        const{businessname,businessownername,businessregno,contactno} = this.state

        return (
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

                <button type="submit" className="btn btn-primary btn-block" action ="detail">Submit Business Details</button>

            </form>
        )
    }
}


export default (Business)
