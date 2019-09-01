import React, { Component } from 'react';
import Aux from './ReactAux';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error.message })
      });
    }
    
    // componentWillUnmount() {
    //   axios.interceptors.request.reject(this.reqInterceptor);
    //   axios.interceptors.response.reject(this.resInterceptor);
    // }

    closeModal = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.closeModal}>{this.state.error}</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }

  }
}


export default withErrorHandler;