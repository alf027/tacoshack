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
    return (
      <div>
        <div className="ui form">
          <div className="grouped fields">
            <label for="tacoType">Select Taco Type</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="tacoType"></input>
                <label>Taco</label>
              </div>
            </div>
            <div className="field">
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
            </div>
          </div>
        </div>
        <button onClick={this.validateNext}>next</button>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
}

export default StepOne;