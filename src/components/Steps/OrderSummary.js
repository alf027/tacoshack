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
    let subtotal = 0
    this.props.completedOrder.forEach((orderItem) => {
      subtotal += orderItem.price
    })

    return subtotal

  }

  calculateTax() {
    let tax = this.calculateSubTotal() * .08445;
    return tax
  }

  calculateTotal() {
    let total = this.calculateSubTotal() + this.calculateTax();
    return total

  }

  buildOrderItems() {
    return this.props.completedOrder.map((orderItem, index) => {
      return (
        <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">{orderItem.type}</h6>
          </div>
          <span className="text-muted">${orderItem.price.toFixed(2)}</span>
        </li>
      )
    });
  }

  buildOrderSummary() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    const tax = this.calculateTax().toFixed(2);
    const subtotal = this.calculateSubTotal().toFixed(2);
    const total = this.calculateTotal().toFixed(2)
    const orderItems = this.buildOrderItems()

    return (
      <div className='row'>
        <div className="col-md-4 order-md-2 mb-4 mx-auto">
          <ul className="list-group mb-3">
            {orderItems}
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Tax </h6>
                <small className="text-muted">(8.445%)</small>
              </div>
              <span className="text-muted">${tax}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Subtotal</h6>
              </div>
              <span className="text-muted">${subtotal}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between text-success">
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


  render() {
    return this.buildOrderSummary()
  }
};

export default StepFive;