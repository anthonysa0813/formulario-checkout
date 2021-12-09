import { useFormik } from "formik";
import React from "react";
import { withRouter } from "react-router-dom";
import ButtonForm from "./ButtonForm";

const FormPay = (props) => {
  const formik = useFormik({
    initialValues: {
      nameCard: "",
      numberCard: "",
      month: "",
      year: "",
      cvc: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.nameCard) {
        errors.nameCard = "El nombre de la tarjeta es requerida";
      }
      if (!values.numberCard) {
        errors.numberCard = "El número de la tarjeta es obligatoria";
      }
      if (!values.month) {
        errors.month = "Se requiere el número de mes";
      }
      if (!values.year) {
        errors.year = "Se requiere el año de la tarjeta";
      }
      if (!values.cvc) {
        errors.cvc = "Por favor, ingrese su clase secreta";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      props.history.push("/success");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="formField">
        <label>Nombre en la tarjeta</label>
        <input type="text" {...formik.getFieldProps("nameCard")} />
        {formik.touched.nameCard && formik.errors.nameCard && (
          <p className="alert">{formik.errors.nameCard}</p>
        )}
      </div>
      <div className="formField">
        <label>Número de tarjeta</label>
        <input type="number" {...formik.getFieldProps("numberCard")} />
        {formik.touched.numberCard && formik.errors.numberCard && (
          <p className="alert">{formik.errors.numberCard}</p>
        )}
      </div>
      <div className="infoCard">
        <div className="formField">
          <label>Mes</label>
          <input type="number" {...formik.getFieldProps("month")} />
        </div>
        <div className="formField">
          <label>Año</label>
          <input type="number" {...formik.getFieldProps("year")} />
        </div>
        <div className="formField">
          <label>CVC</label>
          <input type="number" {...formik.getFieldProps("cvc")} />
        </div>
      </div>
      {formik.touched.month && formik.errors.month && (
        <p className="alert">{formik.errors.month}</p>
      )}
      {formik.touched.year && formik.errors.year && (
        <p className="alert">{formik.errors.year}</p>
      )}
      {formik.touched.cvc && formik.errors.cvc && (
        <p className="alert">{formik.errors.cvc}</p>
      )}
      <ButtonForm
        label="Cancelar orden"
        type="submit"
        buttonContent="Pagar ahora"
      />
    </form>
  );
};

export default withRouter(FormPay);
