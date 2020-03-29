import React, { Component } from 'react';

import Aux from '../../hoc/BurgerAux.js';
import Burger from '../../components/burger/Burger.js';
import BurgerControl from '../../components/burger/control/BurgerControl.js';
import Modal from '../../components/UI/modal/Modal.js';
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary.js';

//price of each ingredients 
const PRICE = {
    salad: 0.4,
    cheese: 0.3,
    meat: 1.0,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        orderModalState: false,
        orderState: true,
    }

    //Update state of Order button 
    updateOrderState(ingredient) {
        const sum = Object.keys(ingredient).map(igKey => {
            return ingredient[igKey];
        }).reduce((total, next) => {
            //console.log('test', next);
            return total + next;
        }, 0);
        this.setState({
            orderState: sum > 0 ? false : true,
        })
    }

    addIngredient = (type) => {
        //Current ingredient count
        const curCount = this.state.ingredients[type];
        //create copy state to update ingredient
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = curCount + 1; //assign new value of current ingredient
        let updateTotalPrice = this.state.totalPrice + PRICE[type];
        //updateTotalPrice = Math.round(updateTotalPrice * 100) / 100;

        this.setState({
            ingredients: updateIngredient,
            totalPrice: updateTotalPrice,
        })
        this.updateOrderState(updateIngredient);
    }

    removeIngredient = (type) => {
        //Current ingredient count
        const curCount = this.state.ingredients[type];
        if (curCount <= 0) {
            return;
        }
        //create copy state to update ingredient
        const updateIngredient = {
            ...this.state.ingredients
        };
        updateIngredient[type] = curCount - 1; //assign new value of current ingredient
        let updateTotalPrice = this.state.totalPrice - PRICE[type];
        //updateTotalPrice.toFixed(2)
        this.setState({
            ingredients: updateIngredient,
            totalPrice: updateTotalPrice,
        })
        this.updateOrderState(updateIngredient);
    }

    //update state of order modal to show it out
    checkoutOrder = () => {
        const temp = this.state.orderModalState;
        this.setState({
            orderModalState: !temp,
        })
    }

    render() {
        //use for check state of remove button
        const disableInfo = {
            ...this.state.ingredients
        }

        for (let i in disableInfo) {
            disableInfo[i] = disableInfo[i] <= 0 ? true : false;
        }

        return (
            <Aux>
                <Modal show={this.state.orderModalState}>
                    <OrderSummary sum={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControl add={this.addIngredient}
                    remove={this.removeIngredient}
                    disable={disableInfo}
                    order={this.state.orderState}
                    modal={this.checkoutOrder} />
                <h2>Total Price: {this.state.totalPrice.toFixed(2)}</h2>
            </Aux>
        );
    }
}

export default BurgerBuilder;