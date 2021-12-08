import React from "react";
import { FormularioContainer } from "../componentsCss/style";
import ProgressMenu from "./ProgressMenu";

const Formulario = () => {
  return (
    <FormularioContainer>
      <ProgressMenu />
      <form>
        <h2>Detalles de la cuenta</h2>
        <div className="formField">
          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" />
        </div>
        <div className="formField">
          <label htmlFor="correo">Contraseña</label>
          <input type="password" />
        </div>
        <div className="formSend">
          <label>Registrarse</label>
          <button type="button">Iniciar sesión</button>
        </div>
      </form>
    </FormularioContainer>
  );
};

export default Formulario;
