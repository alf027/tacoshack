import React, { Component } from 'react';
class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1
    };
  }

  _next = () => {
    let currentStep = this.state.currentStep

    if(currentStep >= 4) {
      currentStep = 5
    } else {
      currentStep ++ 
    }
  }

  _prev = () => {

  }

  

  render() {
    return (
      <div>Order Wizard</div>
    )
  }
}

export default OrderWizard;