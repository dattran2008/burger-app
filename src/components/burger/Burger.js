import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './ingredient/ingredient.js';

const burger = (props) => {
    

    return (
        <div className={classes.burger}>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;