import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";


// Material UI Imports
import { createMuiTheme } from "@material-ui/core/styles";

// Component Imports
import AppBar from "./components/AppBar";
import FooterBar from "./components/FooterBar";
// Page Imports
import HomePage from "./components/pages/HomePage";

// Action Imports
import { setSettings } from "./actions/settings-actions";

// Local Storage Operations
import {
  getLocalSettings,
  setLocalSettings,
} from "./services/settingsOperations";

class App extends Component {
  constructor(props) {
    super(props);

    // Settings init
    let settings = getLocalSettings();
    if (settings === null || settings === undefined)
      setLocalSettings(this.props.settings);
    else this.props.setSettings(settings);
  }

  render() {
    const theme = createMuiTheme(this.props.settings);

    return (
      <div>
        <AppBar />
        <HomePage />
        <FooterBar />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
  setSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
