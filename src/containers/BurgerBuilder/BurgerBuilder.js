import React, { Component } from 'react';

import Aux from '../../hoc/BurgerAux.js';
import Burger from '../../components/burger/Burger.js';
import BurgerControl from '../../components/burger/control/BurgerControl.js'; 

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
    }

    addIngredient = (type) => {
        //Current ingredient count
        const curCount = this.state.ingredients[type];
        //create copy state to update ingredient
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = curCount + 1; //assign new value of current ingredient
        this.setState({
            ingredients: updateIngredient,
        })
    }
    
    removeIngredient(type) {

    }
    
    
    render() {

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControl add={this.addIngredient}
                remove={this.removeIngredient} />
            </Aux>
        );
    }
}

export default BurgerBuilder;