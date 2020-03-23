import React, { Component } from 'react';
import BurgerType from 'prop-types';

import classes from './ingredient.module.css';

//component which manage logic of burger ingredient
class burgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case 'bread-top':
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case 'meat':
                ingredient = <div className={classes.Meat}></div>;
                break;
            case 'cheese':
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case 'salad':
                ingredient = <div className={classes.Salad}></div>;
                break;
            case 'bacon':
                ingredient = <div className={classes.Bacon}></div>;
                break;
        }
        return ingredient;
    };

}

burgerIngredient.propTypes = {
    type: BurgerType.string.isRequired
};

export default burgerIngredient;