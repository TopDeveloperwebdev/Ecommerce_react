import React, { Component } from "react";
import AppBarMUI from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";



const styles = (theme) => ({
  root: {
    width: "100%",
    top: "1px",
    left: "0px",  
    height: "75px",
    background: "#312E4B 0% 0% no-repeat padding-box",
    opacity: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
});

class AppBar extends Component {
  state = {
    isDrawerOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerOpen: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>       
      </div>
    );
  }
}

export default withStyles(styles)(AppBar);
