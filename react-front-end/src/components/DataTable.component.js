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

            //var stringResult =JSON.stringify(Payments)
            //console.log(stringResult)
            //console.log(typeof (Payments))
            //console.log(resultArray)
            for(let i = 0;i< resultArray.length;i++){
                //console.log(resultArray[i])
                for(let j = 1;j<2;j++){
                    //console.log(resultArray[i][j])
                    for(let k = 0;k<5;k++) {
                        //console.log(resultArray[i][j][k])
                    }
                        return (

                            <div>

                                <div>

                                    <div>
                                        <table className="ui celled selectable table">
                                            <thead>
                                            <tr>
                                                <th className="center  aligned"> Payment ID</th>
                                                <th className="center  aligned">Payment Type</th>
                                                <th className="center  aligned">Amount</th>
                                                <th className="center  aligned">    User Email</th>
                                                <th className="center  aligned">User Name</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className ="ui celled inverted fixed single line table ">
                                                <th className="center aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[0]}


                                                        </li>
                                                    ))}
                                                </th>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[1]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[2]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[3]}

                                                        </li>
                                                    ))}
                                                </td>

                                                <td className="left aligned">

                                                    {Payments.map((data,index)=>(
                                                        <li key={index}>
                                                            {data[4]}

                                                        </li>
                                                    ))}
                                                </td>

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