import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        props.showState &&
        <div className={classes.Backdrop}
            onClick={props.close}></div>

    )
}

export default backdrop;