import React from 'react';
import Aux from '../../../hoc/BurgerAux.js';
import Button from '../../UI/button/Button.js';

const OrderSummary = (props) => {
    const igArr = Object.keys(props.sum).map(ig => {
        return (
            <li key={ig}>
                <span style={{ textTransform: 'capitalize' }}>
                    {ig}
                </span>: {props.sum[ig]}
            </li>
        )
    });

    return (
        <Aux>
            <h4>Your Order <span>&times;</span></h4>
            <p>Here is a delicious burger includes the following ingredients:</p>
            <ul>
                {igArr}
            </ul>
            <p>Total: {props.price.toFixed(2)}</p>
            <h3>Wanna continue to check out?</h3>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </Aux>
    );
}

export default OrderSummary;