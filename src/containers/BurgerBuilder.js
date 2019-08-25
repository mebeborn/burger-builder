import React, { Component } from 'react';
import Aux from '../hoc/ReactAux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
  meet: 1.2,
  bacon: 1,
  salad: 0.8,
  cheese: 0.5
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      salad: 2,
      bacon: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;

    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    console.log(this.state);

    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    if(newCount < 0) return;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;

    const priceDeduction = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    console.log(this.state);

    this.setState({ ingredients: newIngredients, totalPrice: newPrice });

  }

  render() {
    const disabledIngredients = {...this.state.ingredients};

    for (let key in disabledIngredients) {
      disabledIngredients[key] = !disabledIngredients[key];
    }
    console.log(disabledIngredients);

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledIngredients={disabledIngredients} />
      </Aux>
    )
  }
}

export default BurgerBuilder;

