import React from 'react';
import {isEmpty} from 'lodash';


class StepFour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDrink: {},
      drinkTypeDef: [
        { drinkType: 'yes' },
        { drinkType: 'no' }
      ],
      errorMessage: ""
    }


  }

  validateNext = () => {
    if(isEmpty(this.state.selectedDrink)) {
      this.setState({errorMessage: "Please Select a Drink Type"})
    } else {
      this.props.next(this.state.selectedDrink);
      this.setState({errorMessage: "", selectedDrink: {}});

    }
  }

  validatePrev = () => {
    this.props.prev()
  }

  setDrinkState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedDrink: this.state.drinkTypeDef[index] }, () => {
      console.log(this.state.selectedDrink);
    })
  }

  buildRadioOptions = () => {
    return this.state.drinkTypeDef.map((drink, index) => {
      return (
        <div key={index} className="field">
          <div className="ui radio checkbox" >
            <input type="radio" name="drinkType" value={index} onClick={this.setDrinkState}></input>
            <label>{drink.drinkType}</label>
          </div>
        </div>
      )
    });
  }

  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    const drink = this.buildRadioOptions()

    return (
      <div>
        <div className="ui form">
          <div className="grouped fields">
            <label htmlFor="tacoType">Do You Want a Drink?</label>
            <p>{this.state.errorMessage}</p>
            {drink}
          </div>
        </div>
        <button onClick={this.validateNext}>next</button>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
}

export default StepFour