import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import Order from '../../components/Order/Order';

class Orders extends Component {

  state = {
    orders: [],
    loading: false
  }

  componentDidMount() {

    axios.get('/orders.json')
      .then((response) => {
        const fetchedArray = [];
        for (let key in response.data) {
          fetchedArray.push({
            id: key,
            ...response.data[key]
          })
        }
        console.log(fetchedArray);
        this.setState({ orders: fetchedArray, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false })
      })

  }

  render() {



    return (
      <div>
        {
          this.state.orders.map(order => {
            return <Order key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          })
        }
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
