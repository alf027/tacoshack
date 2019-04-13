import React from 'react';
import {isEmpty} from 'lodash';

class StepThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSalsa: {},
      salsaTypesDef: [
        { salsaType: 'Pico de Gallo' },
        { salsaType: 'Habanero Devil Sauce' },
        { salsaType: 'Verde Salsa' }
      ],
      errorMessage: ""
    }


  }

  validateNext = () => {
    if(isEmpty(this.state.selectedSalsa)) {
      this.setState({errorMessage: "Please Select a Salsa Type"})
    } else {
      this.props.next(this.state.selectedSalsa);
      this.setState({errorMessage: "", selectedSalsa: {}});
    }
  }

  validatePrev = () => {
    this.props.prev()
  }

  setSalsaState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedSalsa: this.state.salsaTypesDef[index] }, () => {
      console.log(this.state.selectedSalsa);
    })
  }

  buildRadioOptions = () => {
    return this.state.salsaTypesDef.map((salsa, index) => {
      return (
        <div key={index} className="field">
          <div className="ui radio checkbox" >
            <input type="radio" name="salsaType" value={index} onClick={this.setSalsaState}></input>
            <label>{salsa.salsaType}</label>
          </div>
        </div>
      )
    });
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    const salsa = this.buildRadioOptions()

    return (
      <div className="row">
        <div className="mx-auto">
          <div className="ui form">
            <div>
              <label htmlFor="tacoType">Select Salsa Type</label>
              <p>{this.state.errorMessage}</p>
              {salsa}
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

export default StepThree