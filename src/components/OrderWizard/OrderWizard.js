import React, { Component } from 'react';
// import ChoicesList from '../ChoicesList/ChoicesList';
import StepOne from '../Steps/Step1';

class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      tacoOrder: {
        1: {
          tacoType: '',
          price: 0
        },
        2: {
          meatType: ''
        },
        3: {
          salsaType: ''
        },
        4: {
          drink: false,
          price: 1.25
        }
      }
    }
  };


  _next = (data) => {
    let currentStep = this.state.currentStep
    this.setState({
      tacoOrder: {
        ...this.state.tacoOrder[currentStep],
        tacoType: data.type
      }
    },()=>{
      console.log('this.state.tacoOrder', this.state.tacoOrder);
      console.log('data', data);
    })
   

    if (currentStep >= 4) {
      currentStep = 5
    } else {
      currentStep += 1
    }

    this.setState({ currentStep: currentStep }, () => {
      console.log('current step', this.state.currentStep)
    })

  }

  _prev = (data) => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 2) {
      currentStep = 1
    } else {
      currentStep -= 1
    }

    this.setState({ currentStep: currentStep }, () => {
      console.log('current step', this.state.currentStep)
    })
  }



  render() {
    return (
      <div>
        <div>Order Wizard</div>
        <StepOne prev={this._prev} next={this._next} />

      </div>

    )
  }
}

export default OrderWizard;