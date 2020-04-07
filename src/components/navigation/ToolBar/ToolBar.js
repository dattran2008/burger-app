import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../logo/Logo.js';
import NavItems from '../NavigationItem/NavItems.js';
import SideMenu from '../SideMenu/Button/SideMenuButton.js';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <SideMenu open={props.open} />
            <div style={{ height: '80%' }}>
                <Logo />
            </div>
            <nav className={classes.DesktopMode}>
                <NavItems />
            </nav>
        </header>
    )
};

export default toolbar;