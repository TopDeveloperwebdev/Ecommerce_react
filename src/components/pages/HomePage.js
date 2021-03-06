import React, { Component } from "react";
import { connect } from "react-redux";


// Material UI Imports
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";

import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import {withStyles } from "@material-ui/core/styles";
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
  constructor(props) {
    super(props);
    this.state = {
      stepper: 0,
      validation: [1, 0, 1],
      stepperStyles: ["active", "beactive", "beactive"],
      expanded: 0,
    };
  }
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
  changeStepper(event, activeStep) {
    event.preventDefault();
    let a = this.state.stepperStyles.slice(); //creates the clone of the state
    a[this.state.stepper] = "completed";
    a[activeStep] = "active";
    console.log("thissetstaebefore", this.state.stepper);
    this.setState({
      stepper: activeStep,
      stepperStyles: a,
      expanded: activeStep,
    });
  }
  changeExpand(event, activeStep) {
    event.preventDefault();
    if (this.state.validation[activeStep]) {
      let a = this.state.stepperStyles.slice(); //creates the clone of the state
      a[this.state.stepper] = "completed";
      a[activeStep] = "active";
      console.log("thissetstaebefore", this.state.stepper);
      this.setState({
        stepper: activeStep,
        stepperStyles: a,
        expanded: activeStep,
      });
    }
  }
  handleValidation() {}
  onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    // fetch("/api/form-submit-url", {
    //   method: "POST",
    //   body: data,
    // });
  }
  
  render() {
    const steps = this.getSteps();
    let activeStep = this.state.stepper;
    let expanded = this.state.expanded;
    const rows = this.getTableData();
    const result = this.getResult();

    return (
    
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
          <form onSubmit={this.handleSubmit}>
            <div className="uploadCard">
              <div className="uploadForm">
                <Accordion
                  expanded={expanded === 0}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 0)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[0]}
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
                        <input
                          placeholder="Carla Sousa Caetano"
                          onChange={() => this.handleValidation(0)}                       
                          name="title"
                        />
                      </div>
                      <div>
                        <label>E-mail:</label>
                        <input
                          placeholder="carlacaetano@gmail.com"
                          type="email"                       
                          name="email"
                        />
                      </div>
                      <div>
                        <label>CPF:</label>
                        <input placeholder="001.234.567-89"   name="CPF"></input>
                      </div>

                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="(63) 9 9900 9901"  name="phone" />
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <select name="sex">
                          <option>feminino</option>
                          <option>masculina</option>
                        </select>
                      </div>
                      <div>
                        <label>Telefone de Contato:</label>
                        <input placeholder="Carla Sousa Caetano" type="date"   name="date"/>
                      </div>
                      <div className="col-lg-12">
                        <button
                          onClick={(e) => this.changeStepper(e, 1)}
                          disabled={!this.state.validation[0]}
                          className="confirmBtn"
                        >
                          confirmar
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                {/* <Accordion
                  expanded={expanded === 1}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 1)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[1]}
                  >
                    <Typography>Informações para entrega{expanded}</Typography>
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
                          onClick={(e) => this.changeStepper(e, 2)}
                          className="confirmBtn"
                        >
                          confirmar
                        </button>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion }
                  expanded={expanded === 2}
                  className="formSection"
                  onChange={(e) => this.changeExpand(e, 2)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    className={this.state.stepperStyles[2]}
                  >
                    <Typography>Forma de Pagamento</Typography>
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
                    </div>
                  </AccordionDetails>
                </Accordion>
                */}
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
                <div className="col-lg-12">
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
                  <div className="col-lg-12 text-center">
                    {this.state.validation[2] === 1 && (
                      <button
                        className="confirmBtn"
                        type="button"
                        onClick={this.onSubmit}
                      >
                        confirmar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
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
