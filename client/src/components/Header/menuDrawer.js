import React from 'react';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import './menuDrawer.css';

const MenuDrawer = props => (
    <Drawer
        open={props.open}
        onClose={props.onCloseDrawer}>
        <div className="drawer-main">
            <h3 className="drawer-header">Code With Us</h3>
        </div>
        <List className="menu-items" component="nav">
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <FontAwesomeIcon icon="id-card" className="idCard" />
                </ListItemIcon>
                <ListItemText primary="User Info" />
            </ListItem>
        </List>
    </Drawer>
);

export default MenuDrawer;