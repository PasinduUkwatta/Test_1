import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";
import Address from "./address.component";
import Business from "./business.component";
import HomePage from "./homepage.component";
import Payment from "./payment.component";
import PaymentDetails from "./paymentdetails.component";
import Profile from "./profile.component";
import EmailConfirm from "./confirmemail.component";
import SignOut from "./signout.component";
import CreditCard  from "./creditcard.component";



function App() {



  return (


    <Router>
    <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">

          <Switch>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/' component={HomePage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/address" component={Address} />
            <Route path="/business" component={Business} />
            <Route path="/payment" component={Payment} />
            <Route path="/payment-details" component={PaymentDetails} />
            <Route path="/profile" component={Profile} />
            <Route path="/email-confirm" component={EmailConfirm} />
            <Route path="/sign-out" component={SignOut} />
            <Route path="/credit-card" component={CreditCard} />


          </Switch>

        </div>
      </div>
    </div></Router>

  );
}

export default App;
