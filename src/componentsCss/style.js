import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FormularioContainer = styled.div`
  flex: 1 0 100%;
  height: 100vh;
  /* border: 1px solid green; */
  background-color: var(--bg-white);

  display: flex;
  padding: 10px;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  & h2 {
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 24.24px;
  }
  & form {
    width: 70%;
  }
  & .formField {
    display: flex;
    margin-block-start: 32px;
    flex-direction: column;
  }
  & input {
    padding: 1rem;
    width: 100%;

    margin-block-start: 1rem;
    background-color: #e2e8f0;
    border: none;
    border-radius: 5px;
    outline-color: var(--primary);
  }
  & .alert {
    color: red;
  }
  & .formSend {
    padding: 1rem;
    margin-block-start: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
  }
  & .buttonRoute {
    padding: 20px 27px;
    border: none;
    background-color: var(--primary);
    color: white;
    border-radius: 10px;
    text-decoration: none;
    &:active {
      transform: scale(1.1);
      transition: 0.3s ease;
    }
  }
  & .infoCard {
    display: flex;
    gap: 3rem;
  }
  @media (min-width: 768px) {
    flex: 1 0 60%;
    border-radius: 10px;
    padding: 40px;

    & form {
      margin-block-start: 36px;
    }
  }
`;

export const ProductContainer = styled.div`
  flex: 1 0 100%;
  background-color: var(--bg-white);

  padding: 40px;
  & .productContent {
  }
  & .productImage {
    display: flex;
    justify-content: center;
  }
  & .countProduct {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .nameProduct p {
      font-weight: 500;
      font-size: 20px;
      line-height: 24.24.px;
      color: var(--black);
    }
    & .nameProduct p:nth-child(2) {
      font-weight: 700;
      font-size: 20px;
      line-height: 24.24px;
      color: var(--black);
    }
    & .counterProduct {
      display: flex;
      align-items: center;
      gap: 1rem;
      align-self: flex-center;
      & button {
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 5px;
        background-color: var(--bg-disabled);
      }
      & button:active {
        transform: scale(1.1);
        transition: 0.3s ease;
      }
    }
  }
  & .resumenPrice {
    & .subtotal,
    .envio,
    .total {
      display: flex;
      margin-block-start: 1.5rem;
      justify-content: space-between;
    }
    & strong {
      color: var(--bg-blue-700);
    }
    & p {
      margin: 0;
    }
  }
  & .descount {
    margin-block-start: 1.5rem;
  }
  & .descountInputs {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    & input {
      height: 4rem;
      width: 60%;
      border: none;
      border-radius: 5px;
      background-color: var(--bg-disabled);
    }
    & button {
      height: 4rem;
      width: 40%;
      font-weight: 500;
      line-height: 20px;
      border-radius: 10px;
      outline: none;
      background-color: var(--bg-white);
      color: var(--primary);
      border: none;
      cursor: pointer;
      border: 1px solid var(--primary);
      &:active {
        transform: scale(1.1);
        transition: 0.3s ease;
      }
    }
  }
  & .infoContent {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid var(--primary);
    margin-block-start: 1rem;
  }
  & .infoContent:nth-child(3),
  .infoContent:nth-child(4) {
    display: flex;
    gap: 2rem;

    justify-content: space-between;
  }
  @media (min-width: 768px) {
    flex: 1 0 30%;
    border-radius: 10px;
  }
`;

export const MenuContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .separate {
    /* border: 1px solid; */
    /* width: max-content; */
    width: 100%;
    margin-inline: 1rem;
    height: 1px;
    background-color: black;
  }
  & a {
    text-decoration: none;
  }
`;

export const SuccessContainer = styled.div`
  color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .icon-check {
    font-size: 8rem;
  }
  & a {
    text-decoration: none;
  }
`;
