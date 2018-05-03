import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="title" color="inherit">
                Code With Us
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Header;