import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from "../components/appbar/Header";
import SideBar from '../components/sidebar/SideBar';
import PageRoutes from '../components/routes/PageRoutes';

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
  state = { mobileOpen: false };

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
          <PageRoutes />
        </main>
      </div >
    );
  }
}

export default withStyles(styles)(ResponsiveDrawer);