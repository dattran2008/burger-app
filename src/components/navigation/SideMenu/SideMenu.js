import React, { Component } from 'react';
import classes from './SideMenu.module.css';
import NavItems from '../NavigationItem/NavItems.js';
import Logo from '../../logo/Logo.js';
import BackDrop from '../../UI/backdrop/Backdrop.js';
import Aux from '../../../hoc/BurgerAux.js';

const sideMenu = (props) => {

    let attachedClass = [classes.SideMenu, classes.close];
    if (props.showState) {
        attachedClass = [classes.SideMenu, classes.open];
    }
    //console.log(attachedClass);

    return (
        <Aux>
            <BackDrop showState={props.showState} close={props.close} />
            <div className={attachedClass.join(' ')}>
                <div style={{ height: '15%' }}>
                    <Logo />
                </div>
                <nav>
                    Test nav side
                    <NavItems />
                </nav>
            </div>
        </Aux >
    )
};

export default sideMenu; 