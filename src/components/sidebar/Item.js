import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
import InboxIcon from "@material-ui/icons/MoveToInbox";

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 6,
    },
});

class Item extends React.Component {
    state = { open: false };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    render() {
        const { classes } = this.props;

        const children = this.props.menu.children.map((subMenu) => {

            return (
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subMenu.route === null ?
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary={subMenu.menuName} />
                            </ListItem> :
                            <ListItem button className={classes.nested} component={Link} to={subMenu.route}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText inset primary={subMenu.menuName} />
                            </ListItem>}
                        {/*recurssive call to submenus*/}
                    </List>
                </Collapse>
            )
        });

        return (
            <div>
                {this.props.menu.route === null ?
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={this.props.menu.menuName} />
                        {this.props.menu.children.length > 0 ?
                            this.state.open ? <ExpandLess /> : <ExpandMore /> : ""}
                    </ListItem> :
                    <ListItem button onClick={this.handleClick} component={Link} to={this.props.menu.route}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText inset primary={this.props.menu.menuName} />
                        {this.props.menu.children.length > 0 ?
                            this.state.open ? <ExpandLess /> : <ExpandMore /> : ""}
                    </ListItem>
                }
                {children}
            </div>
        )
    }
}
export default withStyles(styles)(Item);