import React from 'react';

import classes from './BurgerControl.module.css';
import BuildControl from './buildControl/buildControl.js';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BurgerControl = (props) => {

    return (
        <div className={classes.BurgerControl}>
            {
                controls.map(ctrl => {
                    return <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        add={() => props.add(ctrl.type)}
                        remove={() => props.remove(ctrl.type)}
                        disable={props.disable[ctrl.type]} />
                })
            }
            <button type='button' className={classes.OrderButton}
                disabled={props.order}
                onClick={props.modal}>Order Now</button>
        </div>
    )
}

export default BurgerControl;