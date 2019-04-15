import React from 'react';
import {isEmpty} from 'lodash';


class StepFour extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDrink: {},
      drinkTypeDef: [
        { drinkType: 'Yes' },
        { drinkType: 'No' }
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
          <div className="form-check" >
            <input className="form-check-input" type="radio" name="drinkType" value={index} onClick={this.setDrinkState}></input>
            <label className="form-check-label">{drink.drinkType}</label>
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
      <div className="row">
        <div className="mx-auto">
          <div className="ui form">
            <div>
              <div className="text-center" >
                  <label htmlFor="drinkType">Would You like a drink?</label>
                  <p className="text-danger">{this.state.errorMessage}</p>
              </div>
              {drink}
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.validatePrev}>previous</button>
          <span> </span>
          <button type="button" className="btn btn-primary btn-lg" onClick={this.validateNext}>next</button>
        </div>
      </div>
    )
  }
}

export default StepFour