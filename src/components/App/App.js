import React, { Component } from 'react';
import './App.css';
import OrderWizard from '../OrderWizard/OrderWizard';

class App extends Component {
  render() {
    return (
      <div>
        <div>Nicu's Taco Shack</div>
        <OrderWizard />
      </div>
    )
  }
}

export default App;
