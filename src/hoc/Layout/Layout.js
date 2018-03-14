import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        anchorEl: null,
    }

    SideDrawerToggle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        return (
            <Aux>
                <Toolbar
                    auth={this.props.auth}
                    toggleDrawer={this.SideDrawerToggle}
                    handleMenu={this.handleMenu}
                    handleClose={this.handleClose}
                    anchorEl={this.state.anchorEl} />
                <SideDrawer
                    drawer={this.state.showSideDrawer}
                    toggleOff={this.SideDrawerToggle} />

                <main className='layout-content'>
                    {this.props.children}
                </main>
            </Aux>)
    }
};

export default Layout;