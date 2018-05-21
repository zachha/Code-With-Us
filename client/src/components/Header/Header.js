import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './menuDrawer';

const Header = props => (
    <React.Fragment>
        <div className="menu-bar">
            <h2>Code With Us</h2>
            <MenuIcon
                className="menu-icon"
                onClick={props.onOpenDrawer}/>
        </div>
        <MenuDrawer
            open={props.isMenuOpen}
            user={props.user}
            handleLogout={props.handleLogout}
            onCloseDrawer={props.onCloseDrawer}/>
    </React.Fragment>
);

export default Header;