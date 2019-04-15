import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Header from "../components/appbar/Header";
import SideBar from '../components/sidebar/SideBar';
import PageRoutes from '../components/routes/PageRoutes';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    position: 'fixed',
    display: 'flex',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    overflow: 'auto',
    flexGrow: 1,
    backgroundColor: "#eeeeee",
    padding: theme.spacing.unit * 2,
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
        <div className={classes.content}>
          <div className={classes.toolbar}/>
          <PageRoutes />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ResponsiveDrawer);