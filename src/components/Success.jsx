import React from "react";
import { SuccessContainer } from "../componentsCss/style";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <SuccessContainer>
      <i className="icon-check"></i>
      <h1>¡Pago completado!</h1>
      <Link className="buttonRoute" to="/">
        Seguir Comprando
      </Link>
    </SuccessContainer>
  );
};

export default Success;
