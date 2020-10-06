import React, { Component } from "react";
import axios from "axios"
import CustomizedTables from "./table.component"
import Navbar from '../components/navbar/navbar.profile.component'

class PaymentDetails extends Component {



    constructor(props) {
        super (props)

        this.state ={
            paymenttype:'',
            paymentamount:'',
            paymentemail:'',
            paymentownername:'',
            paymentDetails:''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }



    componentDidMount() {
        let auth = localStorage.getItem('accessTokenLogin');
        console.log(auth)

        if (auth === null) {
            console.log("User Details is not Verified")
            window.location = "/sign-in"
            console.log("User Details is not Verified")
        } else {


            const userPayments = {
                paymentDetails: localStorage.getItem('paymentDetails'),

            }

            let userPaymentDetails = {
                userPaymentDetails: userPayments.paymentDetails
            }


            console.log("Payments details to show")
            console.log(userPaymentDetails.userPaymentDetails)


        }
    }


    submitHandler = e => {
        e.preventDefault()

        const userPayments = {
            payments: localStorage.getItem('userPayments'),

        }

        let userPaymentsDetails ={
            payments:userPayments.payments
        }

        console.log("Payments details to show")
        console.log(userPaymentsDetails)

        this.props.history.push('/')
        console.log(this.state)
        axios.post('/payment',this.state)
            .then(response => {
                console.log(response)
                 if(response.data ==="Payment Details successfully Entered Into the Database"){
                    this.props.history.push('/')
                    console.log("Thank you For the Payment")
                }
                else{
                    this.props.history.push('/payment')
                    console.log("Please Try Again with Valid Email")

                }
            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }
    
   
    render() {

        return (
            <div>
            <Navbar/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
                <h3>Previous Payment Details </h3>
               <div>
            <CustomizedTables/>
         


           
              
               </div>
                
                <div><br />
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    action ="detail"
                                    //onClick={()=>{this.props.history.push('/sign-out')}}
                                    onClick={this.submitHandler}
                                >Okey
                                </button>

                </div>
            </div>
            
        )
    }
}


export default (PaymentDetails)
