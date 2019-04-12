import React, { Component } from 'react';
class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1
    };

  }

  

  render() {
    return (
      <div>Order Wizard</div>
    )
  }
}

export default OrderWizard;