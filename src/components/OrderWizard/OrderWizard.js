import React, { Component } from 'react';
// import ChoicesList from '../ChoicesList/ChoicesList';
import StepOne from '../Steps/Step1';
import StepTwo from '../Steps/Step2';
import StepThree from '../Steps/Step3';
import StepFour from '../Steps/Step4';
import StepFive from '../Steps/Step5';
import {isUndefined} from 'lodash';



class OrderWizard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 0,
      tacoOrder: []
    }
  }

  getOptionMetaData () {
    const tacoOptions = [
      {
        optionName: "Taco",
        renderStep: 0,
        options: [
          { type: "Taco", price: 7.99 },
          { type: "Burrito", price: 8.99 },
          { type: "Bowl", price: 6.99 }
        ]
      },
      {
        optionName: "Meat",
        renderStep: 1,
        options: [
          { type: 'Chicken', price: 0.00},
          { type: 'Beef', price: 0.00},
          { type: 'No Meat', price: 0.00}
        ]
      },
      {
        optionName: "Salsa",
        renderStep: 2,
        options: [
          { type: 'Pico de Gallo', price: 0.00 },
          { type: 'Habanero Devil Sauce', price: 0.00 },
          { type: 'Verde Salsa', price: 0.00 }
        ]
      },
      {
        optionName: "Drink",
        renderStep: 3,
        options: [
          { type: 'Drink', price: 1.25 },
          { type: 'No Drink', price: 0.00 }
        ]
      }
    ];

    return tacoOptions
  }

  _next = (data, step) => {
    const optionMetaData = this.getOptionMetaData()
    let currentStep = this.state.currentStep
    let optionValue = data
    let currentTacoOrder = this.state.tacoOrder
    if(isUndefined(currentTacoOrder[step])) {
      currentTacoOrder.push(optionValue)
    } else {
      currentTacoOrder[step] = optionValue
    }
   
    this.setState(
      // this merges the data from the step with the parent state to create a complete order object
      { tacoOrder: currentTacoOrder }, () => {
        console.log('taco order state',this.state.tacoOrder)
      })

    if (currentStep >= optionMetaData.length - 1) {
      currentStep = 4
    } else {
      currentStep += 1
    }

    this.setState({ currentStep: currentStep }, () => {
      console.log('current step', this.state.currentStep)
    })

  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 0
    } else {
      currentStep -= 1
    }

    this.setState({ currentStep: currentStep }, () => {
      console.log('current step', this.state.currentStep)
    })
  }

  buildOptions() {
    const options = this.getOptionMetaData()
    console.log('options',options)
    return options.map((optionObj, index)=>{
      return <StepOne key={index} currentStep={this.state.currentStep} renderStep={optionObj.renderStep} options={optionObj.options} optionName={optionObj.optionName} prev={this._prev} next={this._next} />
    })

  }

  buildOrderWizard() {
    const tacoOptions = this.buildOptions();
    console.log(tacoOptions)
    return (
      <div>
        <div className="text-center">
          <h2>Order Wizard</h2>
          <hr />
        </div>
        <div>
          {tacoOptions}
          <StepFive completedOrder={this.state.tacoOrder} currentStep={this.state.currentStep} prev={this._prev} />
        </div>
      </div>
    )
  }


  render() {
    return this.buildOrderWizard()
  }
}

export default OrderWizard;