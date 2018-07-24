import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { DRAWER_WIDTH } from '../../utils/Constants';

const styles = theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: DRAWER_WIDTH,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
});

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>
                        Pragathi Composite School, Sagar
              </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);