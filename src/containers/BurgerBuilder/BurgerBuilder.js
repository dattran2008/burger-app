import React, { Component } from 'react';

import Aux from '../../hoc/BurgerAux.js';
import Burger from '../../components/burger/Burger.js';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat: 5,
        }
    }
    
    
    render() {

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;