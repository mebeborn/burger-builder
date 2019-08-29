import React, { Component } from 'react';
import Aux from '../../hoc/ReactAux';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css'

class Layout extends Component {
  state ={
    showSideDrawer: true
  }

  sideDraweClosedHandler =() => {
    this.setState({showSideDrawer: false})
  }
  render() {
    return (
      <Aux>
        <SideDrawer closed={this.sideDraweClosedHandler}/>
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout;