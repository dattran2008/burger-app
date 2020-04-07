import React from 'react';
import classes from './SideMenuButton.module.css';

const MenuButton = (props) => {
    return (
        <div className={classes.SideMenuToggle} onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuButton;