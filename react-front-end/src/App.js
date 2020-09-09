import React from 'react';
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

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/address"}>Address</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/business"}>Business</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/payment"}>Payment</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/payment-details"}>Payment Details</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
