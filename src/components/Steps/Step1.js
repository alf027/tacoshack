import React from 'react';

class StepOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTaco: {},
      tacoTypesDef: [
        { tacoType: 'Taco', tacoPrice: 7.99 },
        { tacoType: 'Burrito', tacoPrice: 8.99 },
        { tacoType: 'Bowl', tacoPrice: 6.99 }
      ]
    }


  }

  validateNext = () => {
    this.props.next(this.state.selectedTaco)
  }

  validatePrev = () => {
    this.props.prev()
  }

  

  setTacoState = (event) => {
    console.log(event.target.value)
    const index = event.target.value
    //utilizing the index as the value prop does not like objects
    this.setState({selectedTaco: this.state.tacoTypesDef[index]}, ()=>{
      console.log(this.state.selectedTaco);
    })
  }

  buildRadioOptions = () => {
    return this.state.tacoTypesDef.map((taco, index) => {
      return (
        <div key={index} className="field">
          <div className="ui radio checkbox" >
            <input type="radio" name="tacoType" value={index} onClick={this.setTacoState}></input>
            <label>{taco.tacoType} {taco.tacoPrice}</label>
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
      <div>
        <div className="ui form">
          <div className="grouped fields">
            <label htmlFor="tacoType">Select Taco Type</label>
              {tacos}
          </div>
        </div>
        <button onClick={this.validateNext}>next</button>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
}

export default StepOne;