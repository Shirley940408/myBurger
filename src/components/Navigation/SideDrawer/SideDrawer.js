import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NationItems';
import classes from './SideDrawer.module.scss';

const sideDrawer = props => {
  return (
    <div className = {classes.SideDrawer}>
    <div className = {classes.Logo}>
     <Logo/>
    </div> 
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}
export default sideDrawer;