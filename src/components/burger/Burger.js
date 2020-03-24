import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './ingredient/ingredient.js';

const burger = (props) => {
    
    //Transform object of ingredients passed from BurgerBuilder to Array
    const temp = Object.keys(props.ingredients).map(igArr => {
        //console.log(igArr);
        /*create array which contains the amount of each ingredient in array
        Ex: [ *salad[ null, null], cheese[null, null, null], ... ] */
        
        //create array for each ingredients with length by its amount
        return [...Array(props.ingredients[igArr])].map((_, i) => {
            //const test = [...Array(props.ingredients['bacon'])];
            console.log([],igArr);
            return (
                <BurgerIngredient key={igArr + i} type={igArr} />
                );
            });
        });

    return (
        <div className={classes.burger}>
            <BurgerIngredient type='bread-top' />
            {/* <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' /> */}
            {temp}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;