import React, { Component } from 'react';
import OrderWizard from '../OrderWizard/OrderWizard';
import Header from '../Header/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Nicu's Taco Shack"/>
        <OrderWizard />
      </div>
    );
  }
}

export default App;
