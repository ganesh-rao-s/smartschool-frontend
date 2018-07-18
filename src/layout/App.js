import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar, Typography, Hidden, Divider, List } from '@material-ui/core';

import Header from "../components/appbar/Header";
import SideBar from '../components/sidebar/SideBar';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header handleDrawerToggle={this.handleDrawerToggle} />
        <SideBar mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        </main>
      </div >
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveDrawer);