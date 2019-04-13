import React from 'react';
import {isEmpty} from 'lodash';

class StepTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMeat: {},
      meatTypesDef: [
        { meatType: 'Chicken' },
        { meatType: 'Beef' },
        { meatType: 'No Meat' }
      ],
      errorMessage: ""
    }
  }

  validateNext = () => {
    if(isEmpty(this.state.selectedMeat)) {
      this.setState({errorMessage: "Please Select a Meat Type"})
    } else {
      this.props.next(this.state.selectedMeat)
      this.setState({errorMessage: "", selectedMeat: {}})
    }
  }

  validatePrev = () => {
    this.props.prev()
  }

  setMeatState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({selectedMeat: this.state.meatTypesDef[index]}, ()=>{
      console.log(this.state.selectedMeat);
    })
  }

  

  buildRadioOptions = () => {
    return this.state.meatTypesDef.map((meat, index) => {
      return (
        <div key={index} className="field">
          <div className="ui radio checkbox" >
            <input type="radio" name="meatType" value={index} onClick={this.setMeatState}></input>
            <label>{meat.meatType}</label>
          </div>
        </div>
      )
    });
  }

  render= () => {
    if (this.props.currentStep !== 2) {
      return null;
    }
    const meat = this.buildRadioOptions()

    return (
      <div className="row">
        <div className="mx-auto">
          <div className="ui form">
            <div>
              <label htmlFor="tacoType">Select Meat Type</label>
              <p>{this.state.errorMessage}</p>
              {meat}
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

export default StepTwo