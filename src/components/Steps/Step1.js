import React from "react";
import { isEmpty } from "lodash"

class StepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: {},
      errorMessage: ""
    }
  }

  validateNext = () => {
    if (isEmpty(this.state.selectedOption)) {
      this.setState({ errorMessage: `Please Select a ${this.props.optionName} Type` })
    } else {
      this.props.next(this.state.selectedOption, this.props.renderStep)
      this.setState({ errorMessage: "", selectedOption: {} })
    }

  }

  validatePrev = () => {
    this.props.prev()
  }



  setTacoState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedOption: this.props.options[index] }, () => {
      console.log(this.state.selectedOption);
    })
  }

  buildRadioOptions = () => {
    return this.props.options.map((taco, index) => {
      return (
        <div key={index} className="field">
          <div className="form-check" >
            <input className="form-check-input" type="radio" name="tacoType" value={index} onClick={this.setTacoState}></input>
            <label className="form-check-label">{taco.type} {taco.price.toFixed(2)}</label>
          </div>
        </div>
      )
    });
  }

  buildOptionStep() {
    if (this.props.currentStep !== this.props.renderStep) {
      return null;
    }
    const tacos = this.buildRadioOptions()

    return (
      <div className="row">
        <div className="mx-auto">
          <div className="ui form">
            <div>
              <div className="text-center" >
                <label htmlFor="tacoType">{`Select ${this.props.optionName} Type`}</label>
                <p className="text-danger">{this.state.errorMessage}</p>
              </div>
              
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

  render() {
    return this.buildOptionStep();
  }
}

export default StepOne;