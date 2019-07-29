import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NationItems';
import classes from './SideDrawer.module.scss';
import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => {
  const attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClasses[1] = classes.Open;
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked = {props.closed}/>
      <div className = {attachedClasses.join(' ')}>
      <div className = {classes.Logo}>
      <Logo/>
      </div> 
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
}
export default sideDrawer;