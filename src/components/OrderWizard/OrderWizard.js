import React, { Component } from 'react';
// import ChoicesList from '../ChoicesList/ChoicesList';
import StepOne from '../Steps/Step1';
import StepTwo from '../Steps/Step2';
import StepThree from '../Steps/Step3';

class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 1,
      tacoOrder: {
        tacoType: '',
        tacoPrice: 0,
        meatType: '',
        salsaType: '',
        drink: false,
        drinkPrice: 1.25
      }
    }
  }

  _next = (data) => {
    let currentStep = this.state.currentStep
    this.setState({
      // this merges the data from the step with the parent state to create a complete order object
      tacoOrder: {...this.state.tacoOrder, ...data}
    },()=>{
      console.log(this.state.tacoOrder)
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

  _prev = () => {
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
        <StepOne currentStep={this.state.currentStep} prev={this._prev} next={this._next} />
        <StepTwo currentStep={this.state.currentStep} prev={this._prev} next={this._next} />
        <StepThree currentStep={this.state.currentStep} prev={this._prev} next={this._next} />

      </div>

    )
  }
}

export default OrderWizard;