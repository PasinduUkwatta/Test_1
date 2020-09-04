import React, { Component } from 'react'
import { Route } from 'react-router-dom'

const HomePage = () => (
<div>
    <h3>Welcome</h3>
<Route render={({ history}) => (
    <button
      type='submit'
      className ="btn btn-primary btn-block"
      onClick={() => { history.push('/sign-in') }}
    >
      Sign In
    </button>
  )} />


  <Route render={({ history}) => (
    <button
      type='submit'
      className ="btn btn-primary btn-block"

      onClick={() => { history.push('/sign-up') }}
    >
      Sign -Up
    </button>
  )} />
</div>
  
)

export default HomePage