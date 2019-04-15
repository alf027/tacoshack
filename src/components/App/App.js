import React, { Component } from 'react';
import './App.css';
import OrderWizard from '../OrderWizard/OrderWizard';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <div className="col col-xm-12">
            <h1>Nicu's Taco Shack</h1>
          </div>
        </div>
        <OrderWizard />
      </div>
    )
  }
}

export default App;
