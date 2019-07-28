import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NationItems';

const sideDrawer = props => {
  return (
    <div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}