import React, { Component } from 'react';
import axios from '../axios-orders';
import Aux from '../hoc/ReactAux';
import Modal from '../components/UI/Modal/Modal';
import Spinner from '../components/UI/Spinner/Spinner';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummry';

import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
  meat: 1.2,
  bacon: 1,
  salad: 0.8,
  cheese: 0.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      salad: 0,
      bacon: 0
    },
    purchasable: false,
    purchasing: false,
    loading: false,
    totalPrice: 2
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    this.purchasable(newIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    if (newCount < 0) return;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const priceDeduction = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
    this.purchasable(newIngredients);
  }

  purchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(ingredient => {
        return ingredients[ingredient];
      })
      .reduce((cur, el) => cur + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  orderHandler = () => {
    this.setState({ purchasing: true });
    console.log(this.state);
  }

  orderCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  orderContinueHandler = () => {
    this.setState({ loading: true, purchasing: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Alex',
        surname: 'Born'
      },
      deliveryType: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false })
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      });

  }

  render() {
    const disabledIngredients = { ...this.state.ingredients };

    let orderSummary = (
      <OrderSummary
        orderCancelled={this.orderCancelHandler}
        orderContinued={this.orderContinueHandler} price={this.state.totalPrice}
        ingredients={this.state.ingredients}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    for (let key in disabledIngredients) {
      disabledIngredients[key] = !disabledIngredients[key];
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.orderCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.orderHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;

