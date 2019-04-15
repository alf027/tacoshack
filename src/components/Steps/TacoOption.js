import React from "react";
import { isEmpty } from "lodash"
import './TacoOption.css';

class TacoOption extends React.Component {
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
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedOption: this.props.options[index] })
  }

  buildRadioOptions = () => {
    return this.props.options.map((taco, index) => {
      return (
        <div key={index} className="field">
          <div className="form-check taco-options" >
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
          <hr></hr>
          <div className="ui form">
            <div>
              <div className="text-center" >
                <label htmlFor="tacoType">{`Select ${this.props.optionName} Type`}</label>
                <p className="text-danger">{this.state.errorMessage}</p>
              </div>
              
              {tacos}
            </div>
          </div>
          <div class='buttonFooter'>
            <button type="button" className="btn btn-primary btn-lg previous" onClick={this.validatePrev}>previous</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={this.validateNext}>next</button>
          </div>
          
        </div>
      </div>
    )
  }

  render() {
    return this.buildOptionStep();
  }
}

export default TacoOption;