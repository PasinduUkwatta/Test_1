import React from 'react'
import {Field, reduxForm} from 'redux-form'

class CreditCard extends React.Component{

    renderError({error,touched}){
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className ='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput=({input,label,meta} )=>{

        const className =`field ${meta.error && meta.touched ? 'error' :''}`

        return (
            <div className ={className}>
                <label>{label}</label>
                <input {...input} autoComplete ="off"/>
                {this.renderError(meta)}
            </div>
        )

    }

    onSubmit(formValues){
        console.log(formValues)


    }

    render(){


        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className ="ui form error">
                <Field
                    name='userName'
                    label ="Enter User Name"
                    component={this.renderInput}
                />

                <Field
                    name='cardNumber'
                    label ="Enter Card Number"
                    component={this.renderInput}
                />

                <button className ="ui button primary">Submit</button>
            </form>
        )
    }

}

const validate=(formValues) =>{
    const errors ={}

    if(!formValues.userName){
        errors.userName ="You Must Enter a User Name"

    }

    if(!formValues.cardNumber){
        errors.cardNumber ="You Must Enter a Valid Card Number"

    }

    return errors
}


export default reduxForm({
    form: 'cardDetails',
    validate
})(CreditCard)