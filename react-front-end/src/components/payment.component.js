import React, { Component } from "react";
import {payment} from "./userFunctions.component";
import Navbar from "./navbar/navbar.profile.component";

class Payment extends Component {

    constructor(props) {
        super (props)
        console.log(this.props)

        this.state ={
            paymenttype:'',
            paymentamount:'',
            paymentemail:'',
            paymentownername:'',
          
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()


        const userPayment ={
            paymenttype:this.state.paymenttype,
            paymentamount:this.state.paymentamount,
            paymentemail:this.state.paymentemail,
            paymentownername:this.state.paymentownername,
        }

        payment(userPayment)
            .then(res=>{

        })



        }
    
   
    render() {
        const{paymenttype,paymentamount,paymentemail,paymentownername} = this.state

        return (
            <div>
                <Navbar/>
                <form onSubmit={this.submitHandler} >
                    <h3>Payment Details</h3>

                    <div className="form-group">
                        <label>Payment Type</label>
                        <input
                            type="text"
                            name ="paymenttype"
                            className="form-control"
                            placeholder="Enter Payment Type"
                            value={paymenttype}
                            onChange={this.changeHandler}  />
                    </div>

                    <div className="form-group">
                        <label>Payment Amount</label>
                        <input
                            type="text"
                            name ="paymentamount"
                            className="form-control"
                            placeholder="Enter Payment Amount"
                            value={paymentamount}
                            onChange={this.changeHandler}  />
                    </div>

                    <div className="form-group">
                        <label>Payment Email</label>
                        <input
                            type="text"
                            name ="paymentemail"
                            className="form-control"
                            placeholder="Enter Payment Email"
                            value={paymentemail}
                            onChange={this.changeHandler}  />
                    </div>

                    <div className="form-group">
                        <label>Payment Owner Name</label>
                        <input
                            type="text"
                            name ="paymentownername"
                            className="form-control"
                            placeholder="Enter Payment Owner Name  "
                            value={paymentownername}
                            onChange={this.changeHandler}  />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" action ="detail">Submit Payment Details</button>

                </form>
            </div>

        )
    }
}


export default (Payment)
