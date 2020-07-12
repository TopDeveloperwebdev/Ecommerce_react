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
  active: {
    "& $line": {
      borderColor: "#2CC120",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#2CC120",
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
  getTableData() {
    return [
      { td1: "./img/01.png", td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: "./img/01.png", td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: "./img/01.png", td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: "/img/01.png", td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
      { td1: "/img/01.png", td2: "Fish Oil", td3: "1", td4: "R$ 79,00" },
    ];
  }
  getResult() {
    return [
      { title: "Subtotal:", value: "R$ 674,00" },
      { title: "Desconto:", value: "- R$ 269,60" },
      { title: "Frete:", value: "R$ 0,00" },
      { title: "Subtotal:", value: "R$ 674,00" },
    ];
  }
  render() {
    const steps = this.getSteps();
    let activeStep = this.props.home.test;
    let expanded = this.props.home.test;
    const rows = this.getTableData();
    const result = this.getResult();
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
          <div className="uploadCard">
            <div className="uploadForm">
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
                    <p>
                      <span>Já está cadastrado?</span>Clique aqui para entrar
                    </p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="carlacaetano@gmail.com" />
                    </div>
                    <div>
                      <label>CPF:</label>
                      <input placeholder="001.234.567-89"></input>
                    </div>

                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="(63) 9 9900 9901" />
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <select>
                        <option>feminino</option>
                        <option>masculina</option>
                      </select>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" type="date" />
                    </div>
                    <div className="col-lg-12">
                      <button
                        onClick={() => {
                          this.props.setTest(1);
                        }}
                      >
                        confirmar
                      </button>
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
                    <p>
                      <span>Já está cadastrado?</span>Clique aqui para entrar
                    </p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>CPF:</label>
                      <input></input>
                    </div>

                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>Gênero:</label>
                      <select>
                        <option>masculino</option>
                        <option>fêmeo</option>
                      </select>
                    </div>
                    <div>
                      <label>Telefone de Contato:</label>
                      <input placeholder="Carla Sousa Caetano" type="date" />
                    </div>
                    <div className="col-lg-12">
                      <button
                        onClick={() => {
                          this.props.setTest(2);
                        }}
                      >
                        confirmar
                      </button>
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
                    <p>
                      <span>Já está cadastrado?</span>Clique aqui para entrar
                    </p>
                    <div>
                      <label>Nome Completo:</label>
                      <input placeholder="Carla Sousa Caetano" />
                    </div>
                    <div>
                      <label>E-mail:</label>
                      <input placeholder="Carla Sousa Caetano" />
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
                    <div className="col-lg-12">
                      <button>confirmar</button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="shoppingCart">
              <div className="shoppingHeader">
                <p>Seu carrinho de compras</p>
                <div className="marker">
                  <img src="./img/Grupo de máscara 1.svg" />
                  <span>20% OFF</span>
                </div>
              </div>
              <div className="shoppingTable">
                <div className="tableTH">
                  <span>Produto</span>
                  <span>Descrição</span>
                  <span>Qt</span>
                  <span>Preço Un.</span>
                </div>
                {rows.map((data) => (
                  <div className="tableTR">
                    <span>
                      <img src={data.td1} />
                    </span>
                    <span>{data.td2}</span>
                    <span>{data.td3}</span>
                    <span>{data.td4}</span>
                  </div>
                ))}
              </div>
              <div className="shoppingFooter">
                {result.map((data) => (
                  <div className="tableTF">
                    <span>{data.title}</span>
                    <span>{data.value}</span>
                  </div>
                ))} 
                <div className="tableTF total">
                    <span>TOTAL:</span>
                    <span>R$ 404,40</span>
                  </div>
              </div>
            </div>
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
