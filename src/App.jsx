import React from "react";
import Formulario from "./components/Formulario";
import ProductInfo from "./components/ProductInfo";
import { GridContainer } from "./componentsCss/style";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <GridContainer>
          <Formulario />
          <ProductInfo />
        </GridContainer>
      </div>
    </Router>
  );
};

export default App;
