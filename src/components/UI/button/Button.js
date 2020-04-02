import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    //[classes.Button, classes[props.btnType]].join(' ')
    return(
        <button className={classes["Button"] + ' ' + classes[props.btnType]} onClick={props.clicked}>
            {props.children}
        </button>
    )
};

export default button;