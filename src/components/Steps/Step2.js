import React from 'react';

class StepTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMeat: { meatType: 'Chicken' },
      meatTypesDef: [
        { meatType: 'Chicken' },
        { meatType: 'Beef' },
        { meatType: 'No Meat' }
      ]
    }


  }

  validateNext = () => {
    this.props.next(this.state.selectedMeat)
  }

  validatePrev = () => {
    this.props.prev()
  }

  setMeatState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({ selectedmeat: this.state.meatTypesDef[index] }, () => {
      console.log(this.state.selectedmeat);
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

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    const meat = this.buildRadioOptions()

    return (
      <div>
        <div className="ui form">
          <div className="grouped fields">
            <label htmlFor="meatType">Select Meat Type</label>
            {meat}
          </div>
        </div>
        <button onClick={this.validateNext}>next</button>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
}

export default StepTwo