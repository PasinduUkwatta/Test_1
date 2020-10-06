import React,{Component} from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component{
  render(){
    return (
      <div>

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to={"/address"}>Address</Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>Profile</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/business"}>Business</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/payment"}>Payment</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/payment-details"}>Previous Payments</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/credit-card"}>Credit Card</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/sign-out"}>Sign-Out</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      </div>)
  }
}

