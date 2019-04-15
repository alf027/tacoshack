import React from "react";

class StepFive extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      subtotal: 0,
      tax: 0,
      taxRate: .08445
    }

  }

  componentDidMount() {
    this.calculatePricing();
  }

  calculatePricing() {
    this.setState({ subtotal: this.calculateSubTotal() });
    this.setState({ tax: this.calculateTax() });
    this.setState({ total: this.calculateTotal() });


  }

  validatePrev = () => {
    this.props.prev()
  }

  calculateSubTotal() {
    const foodPrice = this.props.completedOrder.tacoPrice;
    const drinkPrice = this.calculateDrinkPrice();
    let subtotal = foodPrice + drinkPrice;

    return subtotal

  }

  calculateDrinkPrice() {
    return this.props.completedOrder.drinkType === "Yes" ? this.props.completedOrder.drinkPrice : 0.00;
  }

  calculateTax() {
    let tax = this.calculateSubTotal() * .08445;
    return tax
  }

  calculateTotal() {
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
      <div className='row'>
        <div className="col-md-4 order-md-2 mb-4 mx-auto">
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">{completedOrder.tacoType}</h6>
                <small class="text-muted">{completedOrder.meatType}</small>
                <br />
                <small class="text-muted">{completedOrder.salsaType}</small>
              </div>
              <span class="text-muted">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Drink</h6>
              </div>
              <span class="text-muted">${drinkPrice}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Tax </h6>
                <small class="text-muted">(8.445%)</small>
              </div>
              <span class="text-muted">${tax}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Subtotal</h6>
              </div>
              <span class="text-muted">${subtotal}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between text-success">
              <span>Total (USD)</span>
              <strong>${total}</strong>
            </li>
          </ul>
          <div className="row">
            <button type="button" className="btn btn-primary btn-lg" onClick={this.validatePrev}>previous</button>
          </div>
        </div>
      </div>
    )
  }
};

export default StepFive;