import React from 'react';
import classes from './Toolbar.module.scss';

const Toolbar = props  => (
  <header className = {classes.Toolbar}>
    <div>MENU</div> //will replace by own Component
    <div>LOGO</div> // same to above
    <nav>
     ...
    </nav>
  </header>
);

export default Toolbar;
