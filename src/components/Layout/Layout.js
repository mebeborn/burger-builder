import React, { Component } from 'react';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'

class Layout extends Component {
  state ={
    showSideDrawer: false
  }

  sideDraweClosedHandler =() => {
    this.setState({showSideDrawer: false})
  }

  sideDraweOpenedHandler =() => {
    this.setState({showSideDrawer: true})
  }


  render() {
    return (
      <Aux>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDraweClosedHandler}/>
        <Toolbar show={this.sideDraweOpenedHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout;