import React, { Component } from 'react';

import Aux from '../../hoc/BurgerAux.js';
import Burger from '../../components/burger/Burger.js';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2,
        }
    }

    render() {
        return(
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;