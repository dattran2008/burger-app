import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './ingredient/ingredient.js';
import Aux from '../../hoc/BurgerAux.js';


const burger = (props) => {

    //Transform object of ingredients passed from BurgerBuilder to Array
    var temp = Object.keys(props.ingredients).map(igArr => {
        /*create array which contains the amount of each ingredient in array
        Ex: [ salad[ null, null], cheese[null, null, null], ... ] */

        //console.log(igArr);

        //create array for each ingredients with length by its amount
        //Ex: salad : 2 <=> [ _, _ ] length = 2
        return [...Array(props.ingredients[igArr])].map((_, i) => {
            //console.log(igArr, [...Array(props.ingredients[igArr])]);
            return (
                <BurgerIngredient key={igArr + i} type={igArr} />
            );
        });
    }).reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
    console.log(temp);

    return (
        <div className={classes.burger}>
            {temp.length !== 0 ?
                <Aux>
                    <BurgerIngredient type='bread-top' />
                    {/* <BurgerIngredient type='bread-top' /> */}
                    {temp}
                    < BurgerIngredient type='bread-bottom' />
                </Aux>
                : alert('Please choose any ingredient')
            }
        </div>
    );
}

export default burger;