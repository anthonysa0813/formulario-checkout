import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = (props) => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <FormContext.Provider value={{ showArrow, setShowArrow }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
