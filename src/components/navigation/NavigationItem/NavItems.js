import React from 'react';
import classes from './NavItems.module.css';
import Item from './Item.js';

const NavItems = () => {
    return (
        <ul className={classes.NavItems}>
            <Item link='/'>Home</Item>
            <Item link='#'>Order</Item>
        </ul>
    );
};

export default NavItems;