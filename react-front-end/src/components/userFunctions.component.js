
import axios from 'axios'


export const login = loginUser =>{
    return axios
        .post('/sign-in',{
            email:loginUser.email,
            password:loginUser.password,
        })
        .then(responce =>{
            console.log(responce)
            console.log(responce.data)
            console.log(responce.data.data)
            console.log(responce.data.message)
            console.log(responce.data)

            console.log(typeof (responce.data))

             var reponceSignIn=responce.data
            console.log(reponceSignIn)

            if(reponceSignIn.message=="empty array"){
                console.log("empty object")
                var emptyData =responce.data.data[0]
                console.log(emptyData)
                localStorage.setItem("paymentDetails", JSON.stringify(emptyData))
            }

            else{
                console.log("object has values")
                var obj  = localStorage.setItem("paymentDetails", JSON.stringify(responce.data));
                console.log(obj)
            }







            if(!responce.data.error){

                axios.post('/jwt-generate',{
                    email :loginUser.email,
                    password :loginUser.password,
                    }
                                )
                                    .then(response => {
                                        console.log(response)
                                        var accessTokenLogin =response.data.access_token

                                        localStorage.setItem('accessTokenLogin',accessTokenLogin)
                                        window.location = "/profile"


                                    })
                                    .catch(error => {
                                            console.log(error.response)

                                            console.log("Please Try Again")
                                            this.props.history.push('/sign-in')
                                        }

                                    )

            }

            return responce.data
        })
        .catch(err =>{
            console.log(err)
        })

}


export const address =userAddressDetails=> {
    let auth = localStorage.getItem('accessTokenLogin');
    console.log(auth)

    if (auth === null) {
        console.log("User Details is not Verified")
        window.location = "/sign-in"
        console.log("User Details is not Verified")
    } else {


        return axios
            .post('protected', null, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + auth,
                    }
                }
            )
            .then(response => {
                    console.log(response)

                    if (response.data === "Okey") {
                        console.log("post Request")
                        axios.post('address', {
                            line1: userAddressDetails.line1,
                            line2: userAddressDetails.line2,
                            postalcode: userAddressDetails.postalcode,
                            city: userAddressDetails.city,
                            state: userAddressDetails.city,
                            country: userAddressDetails.country
                        })
                            .then(responce => {

                                console.log("address details enterd Succesfully")
                                window.location = "/business"


                            })
                    } else {
                        console.log("User Details is not Verified")
                        window.location = "/sign-in"

                    }
                }
            )
            .catch(error => console.log(error));

    }
}

export const business = userBusinessDetails => {

    let auth = localStorage.getItem('accessTokenLogin');

    if (auth === null) {
        console.log("User Details is not Verified")
        window.location = "/sign-in"
        console.log("User Details is not Verified")
    } else {

        return axios
            .post('protected', null, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer" + " " + auth,
                    }
                }
            )
            .then(response => {
                    console.log(response)
                    return axios
                        .post("business", {
                            businessname: userBusinessDetails.businessname,
                            businessownername: userBusinessDetails.businessownername,
                            businessregno: userBusinessDetails.businessregno,
                            contactno: userBusinessDetails.contactno,
                        })
                        .then(responce => {
                                console.log(responce)
                                console.log("business details enterd Succesfully")
                            }
                        )
                }
            )


    }
}



export const payment = userPayment => {
    let auth = localStorage.getItem('accessTokenLogin');

    if (auth === null) {
        console.log("User Details is not Verified")
        window.location = "/sign-in"
        console.log("User Details is not Verified")
    } else {


        return axios
            .post('payment', {
                paymenttype: userPayment.paymenttype,
                paymentamount: userPayment.paymentamount,
                paymentemail: userPayment.paymentemail,
                paymentownername: userPayment.paymentownername,
            })
            .then(response => {
                console.log(response)
                if (response.data === "Payment Details successfully Entered Into the Database") {


                    console.log("Thank you For the Payment")
                } else {

                    console.log("Please Try Again with Valid Email")

                }
            })
            .catch(error => {
                    console.log(error)
                }
            )
    }
}


export const confirmSignUp = userSignUp => {

    let auth = localStorage.getItem('accessTokenLogin');
    if (auth === null) {
        console.log("User Details is not Verified")
        window.location = "/sign-in"
        console.log("User Details is not Verified")
    } else {


        return axios.post("/confirm", {
            firstName: userSignUp.firstName,
            lastName: userSignUp.lastName,
            email: userSignUp.email,
            password: userSignUp.password,
        })
            .then(response => {
                console.log(response)
                console.log("confirmed details send to the database")
            })
    }

}

