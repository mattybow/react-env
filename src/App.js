import React, { Component } from 'react';
// import StripeTest from './stripeTest';
import Form from './form';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{maxWidth: 500, margin: 'auto'}}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
