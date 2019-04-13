import React from "react";
import { isEmpty } from "lodash"

class StepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTaco: {},
      tacoTypesDef: [
        { tacoType: "Taco", tacoPrice: 7.99 },
        { tacoType: "Burrito", tacoPrice: 8.99 },
        { tacoType: "Bowl", tacoPrice: 6.99 }
      ],
      errorMessage: ""
    }
  }

  validateNext = () => {
    if (isEmpty(this.state.selectedTaco)) {
      this.setState({ errorMessage: "Please Select a Taco Type" })
    } else {
      this.props.next(this.state.selectedTaco)
      this.setState({ errorMessage: "", selectedTaco: {} })
    }

  }

  validatePrev = () => {
    this.props.prev()
  }



  setTacoState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedTaco: this.state.tacoTypesDef[index] }, () => {
      console.log(this.state.selectedTaco);
    })
  }

  buildRadioOptions = () => {
    return this.state.tacoTypesDef.map((taco, index) => {
      return (
        <div key={index} className="field">
          <div className="form-check" >
            <input className="form-check-input" type="radio" name="tacoType" value={index} onClick={this.setTacoState}></input>
            <label className="form-check-label">{taco.tacoType} {taco.tacoPrice}</label>
          </div>
        </div>
      )
    });
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    const tacos = this.buildRadioOptions()

    return (
      <div className="row">
        <div className="mx-auto">
          <div className="ui form">
            <div>
              <label htmlFor="tacoType">Select Taco Type</label>
              <p>{this.state.errorMessage}</p>
              {tacos}
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

export default StepOne;