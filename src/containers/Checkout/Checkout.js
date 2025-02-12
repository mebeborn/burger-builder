import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';

class Checkout extends Component {

  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    console.log(query);
    console.log(query.entries());

    for (let param of query.entries()) {
      if (param[0] == 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients, price });
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
        <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData ingredients={this.state.ingredients} 
        price = {this.state.price} {...props}/>} />
      </div>
    );
  }
}

export default Checkout;