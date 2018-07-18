import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";



class MenuItem extends React.Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {

    let subMenu = [];
    if (this.props.menu.hasOwnProperty("children")) {
      subMenu = this.props.menu.children.map((subMenu, i) => {
        return (
          <MenuItem menu={subMenu} classes={this.props.classes} />
        )
      })
    }

    return (
      this.props.menu.hasOwnProperty("children") ?
       <div>
          <ListItem button onClick={this.handleClick}>
            <ListItemText inset primary={this.props.menu.menuName} />

            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            {subMenu}
          </Collapse>
        </div>
        :
       <div>
          <ListItem button onClick={this.handleClick} className={this.props.classes.nested}>
            <ListItemText inset primary={this.props.menu.menuName} />
          </ListItem>
        </div>
    );
  }
}


export default (MenuItem);
