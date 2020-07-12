import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";



const styles = (theme) => ({
  root: {
    width: "100%",
    top: "1px",
    left: "0px",  
    height: "75px",
    background: "#312E4B 0% 0% no-repeat padding-box",
    opacity: 1,
    textAlign : "center"
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
      <img src='./img/Ever-Branca.png' />    
      </div>
    );
  }
}

export default withStyles(styles)(AppBar);
