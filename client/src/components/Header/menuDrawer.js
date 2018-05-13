import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import PersonIcon from '@material-ui/icons/Person';

const MenuDrawer = props => (
    <Drawer
        open={props.open}
        onClose={props.onCloseDrawer}>
        <div className="drawer-main">
            <h3 className="drawer-header">Code With Us</h3>
        </div>
        <List className="menu-items" component="nav">
            <Link to='/' onClick={props.onCloseDrawer}>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </Link>
            <Link to='/login' onClick={props.onCloseDrawer}>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </ListItem>
            </Link>
            <Link to='/about' onClick={props.onCloseDrawer}>
                <ListItem button>
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </Link>
        </List>
    </Drawer>
);

export default MenuDrawer;