import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Address from "./components/address.component";
import Business from "./components/business.component";
import HomePage from "./components/homepage.component";
import Payment from "./components/payment.component";
import PaymentDetails from "./components/paymentdetails.component";
import Profile from "./components/profile.component";
import EmailConfirm from "./components/confirmemail.component";

function App() {
  return (<Router>
    <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/address" component={Address} />
            <Route path="/business" component={Business} />
            <Route path="/payment" component={Payment} />
            <Route path="/payment-details" component={PaymentDetails} />
            <Route path="/profile" component={Profile} />
            <Route path="/email-confirm" component={EmailConfirm} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
