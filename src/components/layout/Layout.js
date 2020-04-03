import React from 'react';
import Aux from '../../hoc/BurgerAux.js';
import ToolBar from '../navigation/ToolBar/ToolBar.js';

import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <Aux>
            <ToolBar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;