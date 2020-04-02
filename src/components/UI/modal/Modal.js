import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/BurgerAux.js';
import Backdrop from '../backdrop/Backdrop.js';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} close={props.close} />
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>

);

export default Modal;