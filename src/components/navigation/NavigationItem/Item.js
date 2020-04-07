import React from 'react';
import classes from './NavItems.module.css';

const item = (props) => {
    return (
        <li className={classes.item} >
            <a href={props.link}>{props.children}</a>
        </li>
    );
};

export default item;