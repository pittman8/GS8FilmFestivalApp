import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Navbar extends React.Component {    
    useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    
    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false, anchorEl: null });
    };

    render() {
        const menuHome = (
            <span>
                <Button
                aria-controls="menu-home"
                aria-owns={this.state.open ? 'menu-home' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                onMouseOver={this.handleClick}
            >
                Home
            </Button>
                <Button
                    aria-controls="menu-about"
                    aria-owns={this.state.open ? 'menu-about' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseOver={this.handleClick}
                >
                About
            </Button>
            <Menu
                id="menu-home"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={this.state.open}
                onMouseLeave={this.handleRequestClose}
                onClose={this.handleRequestClose}
            >
                <MenuItem
                    component={NavLink}
                    to="/"
                    onClick={this.handleRequestClose}
                >
                    Home
                </Button>
                <Button
                    aria-controls="menu-about"
                    aria-owns={this.state.open ? 'menu-about' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseOver={this.handleClick}
                    >
                    About
                </Button>
                <Menu
                    id="menu-home"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.open}
                    onMouseLeave={this.handleRequestClose}
                    onClose={this.handleRequestClose}
                >
                    <MenuItem
                        component={NavLink}
                        to="/"
                        onClick={this.handleRequestClose}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/about"
                        onClick={this.handleRequestClose}
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
                    aria-owns={this.state.open ? 'menu-participate' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseOver={this.handleClick}
                >
                    Participate
                </Button>

                <Menu
                    id="menu-participate"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.open}
                    onMouseLeave={this.handleRequestClose}
                    onClose={this.handleRequestClose}
                >
                    <MenuItem
                        component={NavLink}
                        to="/participate"
                        onClick={this.handleRequestClose}
                    >
                        Participate
                    </MenuItem>
                    <MenuItem
                        component={NavLink}

                        to="/deadlines"
                        onClick={this.handleRequestClose}
                    >
                        Deadlines & Events
                    </MenuItem>
                    <MenuItem
                        component={NavLink}

                        to="/register"
                        onClick={this.handleRequestClose}
                    >
                        Registration
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/shop"
                        onClick={this.handleRequestClose}
                    >
                        Film Purchase
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/filmmaker-info"
                        onClick={this.handleRequestClose}
                    >
                        Filmmaker Info
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/rules"

                        onClick={this.handleRequestClose}
                    >
                        Rules
                    </MenuItem>
                    <MenuItem
                        component={NavLink}
                        to="/cameras"
                        onClick={this.handleRequestClose}
                    >
                        Camera Manuals
                    </MenuItem>
                </Menu>
            </span>
        );

        return (
            <div className="navbar">
                <AppBar position="static">
                    <Toolbar>
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