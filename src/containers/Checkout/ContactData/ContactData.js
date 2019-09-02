import React, { Component } from 'react';
import axios from '../../../../src/axios-orders';
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' }
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true, purchasing: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Alex',
        surname: 'Born'
      },
      deliveryType: 'fastest'
    }


    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        console.log('ffffffffffff');
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      });
    console.log("444");

  }

  render() {
    let formArrayElements = [];

    for (let key in this.state.orderForm) {
      formArrayElements.push({
        id: key,
        config: { ...this.state.orderForm[key] }
      });
    }

    console.log(formArrayElements);

    let form = (
      <form>
        {formArrayElements.map(element => (
          <Input key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.elementConfig.placeholder} />
        ))}
        <Button clicked={this.orderHandler} btnType='Success'>ORDER</Button>
      </form>
    );

    if (this.state.loading == true) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Type your info</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;