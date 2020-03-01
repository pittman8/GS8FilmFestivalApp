import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Styles from '../css/styles';

class Navbar extends React.Component {        
    state = {
        anchorEl: null,
        homeDropMenuOpen: false,
        participateDropMenuOpen: false,
    };

    handleHomeClick = event => {
        this.setState({ homeDropMenuOpen: true, anchorEl: event.currentTarget });
    };

    handleHomeRequestClose = () => {
        this.setState({ homeDropMenuOpen: false, anchorEl: null });
    };

    handleParticipateClick = event => {
        this.setState({ participateDropMenuOpen: true, anchorEl: event.currentTarget });
    };

    handleParticipateRequestClose = () => {
        this.setState({ participateDropMenuOpen: false, anchorEl: null });
    };

    render() {
        const menuHome = (
            <span>
                <Button
                    aria-controls="menu-home"
                    aria-owns={this.state.homeDropMenuOpen ? 'menu-home' : null}
                    aria-haspopup="true"
                    onClick={this.handleHomeClick}
                    onMouseOver={this.handleHomeClick}
                >
                    Home
                </Button>
                <Menu
                    id="menu-home"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.homeDropMenuOpen}
                    onMouseLeave={this.handleHomeRequestClose}
                    onClose={this.handleHomeRequestClose}
                >
                    <MenuItem
                        component={NavLink}
                        to="/"
                        onClick={this.handleHomeRequestClose}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/about"
                        onClick={this.handleHomeRequestClose}
                    >
                        About
                    </MenuItem>
                </Menu>
            </span>
        );

        const menuParticipate = (
            <span>
                <Button
                    aria-controls="menu-participate"
                    aria-owns={this.state.participateDropMenuOpen ? 'menu-participate' : null}
                    aria-haspopup="true"
                    onClick={this.handleParticipateClick}
                    onMouseOver={this.handleParticipateClick}
                >
                    Participate
                </Button>

                <Menu
                    id="menu-participate"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.participateDropMenuOpen}
                    onMouseLeave={this.handleParticipateRequestClose}
                    onClose={this.handleParticipateRequestClose}
                >
                    <MenuItem
                        component={NavLink}
                        to="/participate"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Participate
                    </MenuItem>
                    <MenuItem
                        component={NavLink}

                        to="/deadlines"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Deadlines & Events
                    </MenuItem>
                    <MenuItem
                        component={NavLink}

                        to="/register"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Registration
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/shop"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Film Purchase
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/filmmaker-info"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Filmmaker Info
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/rules"

                        onClick={this.handleParticipateRequestClose}
                    >
                        Rules
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/cameras"
                        onClick={this.handleParticipateRequestClose}
                    >
                        Camera Manuals
                    </MenuItem>
                </Menu>
            </span>
        );

        return (
            <div style={Styles.navbar}>
                <AppBar
                    position="static">
                    <Toolbar>
                        <Button
                            component={NavLink}
                            to="/admin-data"
                        >
                            AdminData
                        </Button>
                        {menuHome}
                        <Button
                            component={NavLink}
                            to="/events"
                        >
                            GS8 Film Screening Events
                        </Button>
                        {menuParticipate}
                        <Button
                            component={NavLink}
                            to="/contact"
                        >
                            Contact
                        </Button>
                        <Button
                            component={NavLink}
                            to="/donate"
                        >
                            Donate
                        </Button>
                        <IconButton
                            component={NavLink}
                            to="/shop"
                        >
                            <ShoppingCartIcon />
                        </IconButton>                        
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};   

export default Navbar;