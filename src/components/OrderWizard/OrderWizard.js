import React, { Component } from 'react';
import TacoOption from '../Steps/TacoOption';
import OrderSummary from '../Steps/OrderSummary';
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
      { tacoOrder: currentTacoOrder }
    )

    if (currentStep >= optionMetaData.length - 1) {
      currentStep = 4
    } else {
      currentStep += 1
    }

    this.setState({ currentStep: currentStep })

  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 0
    } else {
      currentStep -= 1
    }

    this.setState({ currentStep: currentStep })
  }

  buildOptions() {
    const options = this.getOptionMetaData()
    return options.map((optionObj, index)=>{
      return <TacoOption key={index} currentStep={this.state.currentStep} renderStep={optionObj.renderStep} options={optionObj.options} optionName={optionObj.optionName} prev={this._prev} next={this._next} />
    })

  }

  buildOrderWizard() {
    const tacoOptions = this.buildOptions();
    return (
      <div>
        <div className="text-center">
          <h2>Order Wizard</h2>
        </div>
        <div>
          {tacoOptions}
          <OrderSummary completedOrder={this.state.tacoOrder} currentStep={this.state.currentStep} prev={this._prev} />
        </div>
      </div>
    )
  }


  render() {
    return this.buildOrderWizard()
  }
}

export default OrderWizard;