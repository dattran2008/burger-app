import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/BurgerAux.js';
import Backdrop from '../backdrop/Backdrop.js';

const Modal = (props) => (
    <Aux>
        <Backdrop showState={props.show} close={props.close} />
        <div className={classes.Modal}
            style={{
                transform: props.showState ? 'translateY(-100px)' : 'translateY(-100vh)',
                opacity: props.showState ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>

);

export default Modal;