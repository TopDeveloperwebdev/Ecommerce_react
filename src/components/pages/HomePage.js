import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material UI Imports
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import TextField from "@material-ui/core/TextField";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Accordion } from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Action Imports
import { setTest } from "../../actions/home-actions";
import "./styles/HomePage.scss";
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

class HomePage extends Component {
  getSteps() {
    return ["Select", "Create an ad group", "Create an ad"];
  }
  render() {
    const steps = this.getSteps();
    let activeStep = this.props.home.test;
    let expanded = this.props.home.test;

    return (
      <div className="root">
        <div className="mainSection">
          <div className="stepperContainer">
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<QontoConnector />}
              className="stepper"
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel></StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div>
            <div>
              <Accordion expanded={expanded === 0} className="formSection">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  className="formHeader"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <div className="form">
                    <p><span>Já está cadastrado?</span>Clique aqui para entrar</p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="Carla Sousa Caetano"  />
                    </div>
                    <div>
                      <label>CPF:</label>
                      <input></input>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <select>
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" type="date" />
                    </div>
                    <div className='col-lg-12'>
                        <button onClick={
                                    ()=>{this.props.setTest(1)}
                                }>confirmar</button>
                    </div>
             </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 1} className="formSection">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  className="formHeader"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="form">
                    <p><span>Já está cadastrado?</span>Clique aqui para entrar</p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="Carla Sousa Caetano"  />
                    </div>
                    <div>
                      <label>CPF:</label>
                      <input></input>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <select>
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" type="date" />
                    </div>
                    <div className='col-lg-12'>
                        <button onClick={
                                    ()=>{this.props.setTest(2)}
                                }>confirmar</button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 2} className="formSection">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  className="formHeader"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="form">
                    <p><span>Já está cadastrado?</span>Clique aqui para entrar</p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="Carla Sousa Caetano"  />
                    </div>
                    <div>
                      <label>CPF:</label>
                      <input></input>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <select>
                          <option></option>
                          <option></option>
                          <option></option>
                      </select>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" type="date" />
                    </div>
                    <div className='col-lg-12'>
                        <button>confirmar</button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
           
            </div>
            <div className="shoppingCart"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

const mapDispatchToProps = {
  setTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
