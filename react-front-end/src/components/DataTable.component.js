import React from 'react'



class DataTable extends React.Component{


    constructor(props) {
        super (props)

        this.state ={
            paymentDetails:''

        }



        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
    }

    componentDidMount() {
        let auth = localStorage.getItem('accessTokenLogin');




        if (auth === null) {
            console.log("User Details is not Verified")
            window.location = "/sign-in"
            console.log("User Details is not Verified")
        } else {


            const userPayments = {
                paymentDetails: localStorage.getItem('paymentDetails'),
                setState:localStorage.getItem('paymentDetails'),

            }

            let userPaymentDetails = {
                userPaymentDetails: userPayments.paymentDetails
            }


            console.log("Payments details to show")
            console.log(userPaymentDetails)


        }



    }



    render() {

        let Payments = JSON.parse(localStorage.getItem('paymentDetails'));

        if (Payments === null) {
            console.log("You do not have any Payment Yet")
            window.location = "/sign-in"

        } else {


            let Payments = JSON.parse(localStorage.getItem('paymentDetails'));
            var resultArray = Object.keys(Payments).map((key) => [Number(key), Payments[key]])
            //console.log(typeof (Payments))
            console.log(resultArray)
            for(let i = 0;i< resultArray.length;i++){
                //console.log(resultArray[i])
                for(let j = 1;j<2;j++){
                    console.log(resultArray[i][j])
                    for(let k = 0;k<5;k++) {
                        //console.log(resultArray[i][j][k])
                    }
                        return (
                            <div>
                                <div>

                                    <div>
                                        <table className="ui celled table">
                                            <thead>
                                            <tr>
                                                <th>Payment ID</th>
                                                <th>Payment Type</th>
                                                <th>Amount</th>
                                                <th>User Email</th>
                                                <th>User Name</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td data-label="Name">
                                                </td>
                                                <td data-label="Age">24</td>
                                                <td data-label="Job">Engineer</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Name">Jill</td>
                                                <td data-label="Age">26</td>
                                                <td data-label="Job">Engineer</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Name">Elyse</td>
                                                <td data-label="Age">24</td>
                                                <td data-label="Job">Designer</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <div>

                                        </div>


                                    </div>

                                </div>
                                <br/>

                            </div>)

                    }
                }
            }





        }

}

export default DataTable