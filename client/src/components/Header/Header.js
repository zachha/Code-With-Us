
import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';

import MenuDrawer from './menuDrawer';

const Header = props => {
    return (
        <React.Fragment>
            <div 
                className="menu-bar"
                onClick={props.onOpenDrawer} >
                <MenuIcon 
                    className="menu-icon" />
                <h2>Code With Us</h2>
            </div>
            <MenuDrawer 
                open={props.isMenuOpen}
                onCloseDrawer={props.onCloseDrawer}/>
        </React.Fragment>
    )
};

export default Header;