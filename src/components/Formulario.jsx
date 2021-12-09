import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FormularioContainer } from "../componentsCss/style";
import ProgressMenu from "./ProgressMenu";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Cuenta from "./formularios/Cuenta";
import FormSend from "./formularios/FormSend";
import FormPay from "./formularios/FormPay";
import FormProvider from "../context/FormContext";
import Success from "./Success";

const Formulario = () => {
  return (
    <FormProvider>
      <Router>
        <FormularioContainer>
          <ProgressMenu />

          {/* <AiOutlineLeft></AiOutlineLeft> */}
          <h2>Detalles de la cuenta</h2>
          <Switch>
            <Route path="/" exact>
              <Cuenta />
            </Route>
            <Route path="/send">
              <FormSend />
            </Route>
            <Route path="/pay">
              <FormPay />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </FormularioContainer>
      </Router>
    </FormProvider>
  );
};

export default Formulario;
