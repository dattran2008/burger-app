import React from 'react';
import Aux from '../../../hoc/BurgerAux.js';

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
            <h4>Your Order</h4>
            <p>Here is a delicious burger includes the following ingredients:</p>
            <ul>
                {igArr}
            </ul>
        </Aux>
    );
}

export default OrderSummary;