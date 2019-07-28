import React, { Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
  return(
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className = {classes.Content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout;