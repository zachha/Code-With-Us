import React from 'react';

import Drawer from 'material-ui/Drawer';

const MenuDrawer = props => (
    <Drawer
        open={props.open}
        onClose={props.onCloseDrawer}>
            test
    </Drawer>
);

export default MenuDrawer;