import React, { Fragment } from 'react';
import classes from './Layout.module.scss';

const Layout = (props) => {
  console.log(props.children)
  return(
    <Fragment>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className = {classes.Contents}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout;