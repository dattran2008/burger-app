import React, { Component } from 'react';
import Aux from '../../hoc/BurgerAux.js';
import ToolBar from '../navigation/ToolBar/ToolBar.js';
import SideMenu from '../navigation/SideMenu/SideMenu.js';

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        SideMenuState: false,
    }

    openSideMenu = () => {
        this.setState((prevState) => {
            return {
                SideMenuState: !prevState.SideMenuState,
            }
        })
    }

    closeSideMenu = () => {
        this.setState({
            SideMenuState: false,
        })
    }

    render() {
        return (
            <Aux>
                <ToolBar open={this.openSideMenu} />
                <SideMenu showState={this.state.SideMenuState}
                    close={this.closeSideMenu} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;