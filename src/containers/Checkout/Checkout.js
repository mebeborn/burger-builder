import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    console.log(query);
    console.log(query.entries());

    for(let param of query.entries()) {
      ingredients[param[0]] = +param[1]
    }

    this.setState({ingredients});
  }

  continueCkeckoutHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  cancellCheckoutHandler = () => {
    this.props.history.goBack();
  }

  render() {

    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients}
          continueCheckout={this.continueCkeckoutHandler}
          cancellCheckout={this.cancellCheckoutHandler}
        />
      </div>
    );
  }
}

export default Checkout;