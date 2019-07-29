import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle.js/DrawerToggle';

const Toolbar = props  => (
  <header className = {classes.Toolbar}>
    <DrawerToggle clicked = {props.drawerToggleClicked}/>
    <div className = {classes.Logo}>
      <Logo />
    </div>
    <nav className = {classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
