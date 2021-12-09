import { useFormik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";
import ButtonForm from "./ButtonForm";

const FormSend = (props) => {
  const formik = useFormik({
    initialValues: {
      dir: "",
      street: "",
      code: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.dir) {
        errors.dir = "La dirección es requerida";
      }
      if (!values.street) {
        errors.street = "La calle es requerida";
      }
      if (!values.code) {
        errors.code = "El código postal es requerido";
      }
      return errors;
    },
    onSubmit: (values) => {
      props.history.push("/pay");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formField">
        <label>Primera línea de dirección</label>
        <input type="number" {...formik.getFieldProps("dir")} />
        {formik.touched.dir && formik.errors.dir ? (
          <p className="alert">{formik.errors.dir}</p>
        ) : null}
      </div>

      <div className="formField">
        <label>Nombre de la calle</label>
        <input type="text" {...formik.getFieldProps("street")} />
        {formik.touched.street && formik.errors.street ? (
          <p className="alert">{formik.errors.street}</p>
        ) : null}
      </div>
      <div className="formField">
        <label>Código postal</label>
        <input type="number" {...formik.getFieldProps("code")} />
        {formik.touched.code && formik.errors.code ? (
          <p className="alert">{formik.errors.code}</p>
        ) : null}
      </div>
      <ButtonForm
        label="Cancelar orden"
        type="submit"
        buttonContent="Continuar al pago"
      />
    </form>
  );
};

export default withRouter(FormSend);
