import React, { Component } from 'react';
import ChoicesList from '../ChoicesList/ChoicesList';

class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1
    };
  }

  _next = (data) => {
    let currentStep = this.state.currentStep
    
    if (currentStep >= 4) {
      currentStep = 5
    } else {
      currentStep += 1
    }

    this.setState({ currentStep: currentStep }, ()=> {
      console.log('current step', this.state.currentStep)
    })

  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 2) {
      currentStep = 1
    } else {
      currentStep -= 1
    }

    this.setState({ currentStep: currentStep }, ()=> {
      console.log('current step', this.state.currentStep)
    })
  }



  render() {
    return (
      <div>
        <div>Order Wizard</div>
        <ChoicesList />
        <button onClick={this._next}>next</button>
        <button onClick={this._prev}>previous</button>
      </div>

    )
  }
}

export default OrderWizard;