import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Hidden, Drawer, Toolbar, Typography, Divider, List } from '@material-ui/core';

import MenuItem from './MenuItem';
import { DRAWER_WIDTH } from '../../utils/Constants';
import data from '../../datasource/Sidebar';

const styles = theme => ({
    drawerPaper: {
        width: DRAWER_WIDTH,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        }
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    }
});

class SideBar extends React.Component {
    render() {
        const { classes, theme } = this.props;
        const list = data.map((menu, i) => {
            return (
                <MenuItem menu={menu} classes={this.props.classes} />
            )
        })
        const drawer = (
            <div>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Smart School
                  </Typography>
                </Toolbar>
                <Divider />
                <List>{list}</List>
            </div>
        );
        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.props.mobileOpen}
                        onClose={()=>this.props.handleDrawerToggle()}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(SideBar);