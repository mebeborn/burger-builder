import React, { Component } from 'react';
import axios from '../../../../src/axios-orders';
import classes from './ContactData.css'
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postal: ''
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

    let form = (
      <form>
        <input type='text' name='name' placeholder='Your name' />
        <input type='email' name='email' placeholder='Your email' />
        <input type='text' name='street' placeholder='Your street' />
        <input type='text' name='postal' placeholder='Your postal code' />
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