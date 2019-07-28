import React from 'react';
import classes from './NavigationItem.module.scss';
// import NavigationItems from '../NationItems';

const navigationItem = props => (
  <li className = {classes.NavigationItem}>
    <a href={props.link} className = {props.active ? classes.active: null}>{props.children}</a>
  </li>
);

export default navigationItem;