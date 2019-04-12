import React from 'react';

class StepOne extends React.Component {
  constructor(props) {
    super(props)

    
  }

  validateNext = () => {
    this.props.next('test data')
  }

  validatePrev = () => {

  }

  render() {
    const tacoTypesDef = [
      {type: 'Taco', price: 7.99},
      {type: 'Burrito', price: 8.99},
      {type: 'Bowl', price:6.99}
    ]

    const test = tacoTypesDef.map((tacoType)=>{
      return (
      <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="tacoType"></input>
                <label>{tacoType.type}</label>
              </div>
            </div>
      )
    });

    return (
      <div>
        <div className="ui form">
          <div className="grouped fields">
            <label for="tacoType">Select Taco Type</label>
              {test}
            {/* <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="tacoType"></input>
                <label>Burrito</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="tacoType"></input>
                <label>Bowl</label>
              </div>
            </div> */}
          </div>
        </div>
        <button onClick={this.validateNext}>next</button>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
}

export default StepOne;