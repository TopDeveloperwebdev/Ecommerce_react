import React, { Component } from "react";
import {  withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    bottom: "0px",
    left: "0px",
    opacity: 1,
    textAlign: "center",
  },
  img : {
    width : '100%'
  }
});

class FooterBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <img src="./img/Rodapé.png" className={classes.img} />
      </div>
    );
  }
}

export default withStyles(styles)(FooterBar);
