import { useFormik } from "formik";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ButtonForm from "./ButtonForm";

const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email requerido";
  }

  if (values.password.length < 6) {
    errors.password = "La contraseña vacia ó menor de 6 carácteres";
  }
  return errors;
};

const Cuenta = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      props.history.push("/send");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formField">
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="alert">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="formField">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="alert">{formik.errors.password}</p>
        ) : null}
      </div>
      {/* <ButtonForm label="" type="" buttonContent="" /> */}
      <ButtonForm
        label="Registrarse"
        type="submit"
        buttonContent="Iniciar Sesión"
      />
    </form>
  );
};

export default withRouter(Cuenta);
