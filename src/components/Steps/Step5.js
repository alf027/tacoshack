import React from 'react';

class StepFive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      subtotal: 0,
      tax : 0,
      taxRate: .08445
    }

    this.calculatePricing();

  }
  
  calculatePricing() {
    this.setState({subtotal: this.calculateSubTotal()});
    this.setState({tax: this.calculateTax()});
    this.setState({total: this.calculateTotal()});

  
  }

  componentDidUpdate() {
    
  }

  validatePrev = () => {
    this.props.prev()
  }

  calculateSubTotal () {
    const foodPrice = this.props.completedOrder.tacoPrice;
    const drinkPrice = this.calculateDrinkPrice();
    let subtotal = foodPrice + drinkPrice;

    return subtotal

  }

  calculateDrinkPrice () {
    return this.props.completedOrder.drinkType==='yes' ? this.props.completedOrder.drinkPrice : 0.00;
  }

  calculateTax () {
    let tax = this.calculateSubTotal() * .08445;
    return tax
  }

  calculateTotal () {
    let total = this.calculateSubTotal() + this.calculateTax();
    return total

  }


  render() {
    if (this.props.currentStep !== 5) {
      return null;
    }
    const completedOrder = this.props.completedOrder;
    const tax = this.calculateTax().toFixed(2);
    const subtotal = this.calculateSubTotal().toFixed(2);
    const total = this.calculateTotal().toFixed(2)
    const drinkPrice = this.calculateDrinkPrice().toFixed(2);


    return (
      <div>
        <div className="ui grid">
          <div className="two wide column">{completedOrder.tacoType}</div>
          <div className="two wide column">{completedOrder.tacoPrice}</div>
        </div>
        <div className="ui grid">
          <div className="two wide column"> - {completedOrder.meatType}</div>
          <div className="two wide column">0.00</div>
        </div>
        <div className="ui grid">
          <div className="two wide column"> - {completedOrder.salsaType}</div>
          <div className="two wide column">0.00</div>
        </div>
        <div className="ui grid">
          <div className="two wide column"> - Drink</div>
          <div className="two wide column">${drinkPrice}</div>
        </div>
        <div className="ui grid">
          <div className="two wide column">Subtotal:</div>
          <div className="two wide column">${subtotal}</div>
        </div>
        <div className="ui grid">
          <div className="two wide column">Tax (8.445%):</div>
          <div className="two wide column">${tax}</div>
        </div>
        <div className="ui grid">
          <div className="two wide column">Total:</div>
          <div className="two wide column">${total}</div>
        </div>
        <button onClick={this.validatePrev}>previous</button>
      </div>

    )
  }
};

export default StepFive;