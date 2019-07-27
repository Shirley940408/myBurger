import React, { Fragment } from 'react';
import classes from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return(
    <Fragment>
      <Toolbar />
      /<div>Toolbar, SideDrawer, Backdrop</div>
      <main className = {classes.Content}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout;