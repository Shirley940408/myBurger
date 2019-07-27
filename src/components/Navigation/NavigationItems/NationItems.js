import React from 'react';
import classes from './NavigationItem.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className = {classes.NavigationItems}>
    <NavigationItem />
  </ul>
);

export default NavigationItems;