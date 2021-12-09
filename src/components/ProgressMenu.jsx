import React from "react";
import { MenuContainer } from "../componentsCss/style";
import { NavLink } from "react-router-dom";
const ProgressMenu = () => {
  return (
    <MenuContainer>
      <NavLink to="/">Cuenta</NavLink>
      <div className="separate"></div>
      <i className="icon-check"></i>
      <div className="separate"></div>

      <NavLink to="/send">Envió</NavLink>
      <div className="separate"></div>
      <i className="icon-check"></i>
      <div className="separate"></div>

      <NavLink to="/pay">Pago</NavLink>
    </MenuContainer>
  );
};

export default ProgressMenu;
