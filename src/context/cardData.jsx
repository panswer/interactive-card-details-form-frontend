import { createContext, useState } from "react";

import {
  setCardNumber,
  setCardExp,
  setHolderName,
  setCardCvc,
  handleSubmit,
} from "./logic";

/**
 * @typedef {import('react')} React
 */

/**
 * @typedef {object} CardDataContextSchema
 * @property {string} cardNumber
 * @property {string} cardExp
 * @property {string} holderName
 * @property {string} cardCvc
 * @property {boolean} submit
 * @property {string} cardNumberError
 * @property {string} cardExpError
 * @property {string} holderNameError
 * @property {string} cardCvcError
 * @property {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void} setCardNumber
 * @property {(value:string)=>void} setCardExp
 * @property {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void} setHolderName
 * @property {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void} setCardCvc
 * @property {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void} setSubmit
 * @property {(value:string)=>void} setCardNumberError
 * @property {(value:string)=>void} setCardExpError
 * @property {(value:string)=>void} setHolderNameError
 * @property {(value:string)=>void} setCardCvcError
 */

/**
 * @type {CardDataContextSchema}
 */
export const defaultState = {
  cardNumber: "",
  cardExp: "",
  holderName: "",
  cardCvc: "",
  submit: false,
  cardNumberError: "",
  cardExpError: "",
  holderNameError: "",
  cardCvcError: "",
  setCardNumber: (e) => {},
  setCardExp: (value) => {},
  setHolderName: (e) => {},
  setCardCvc: (value) => {},
  setSubmit: (e) => {},
  setCardNumberError: (value) => {},
  setCardExpError: (value) => {},
  setHolderNameError: (value) => {},
  setCardCvcError: (value) => {},
};

export const cardDataContext = createContext(defaultState);

/**
 * @param {object} props
 * @param {JSX.Element} props.children
 *
 * @returns {JSX.Element}
 */
const CardDataContext = (props) => {
  const [state, setState] = useState({
    cardNumber: defaultState.cardNumber,
    cardExp: defaultState.cardExp,
    holderName: defaultState.holderName,
    cardCvc: defaultState.cardCvc,
    submit: defaultState.submit,
    cardNumberError: "",
    cardExpError: "",
    holderNameError: "",
    cardCvcError: "",
  });

  /**
   * @type {CardDataContextSchema}
   */
  let values = {
    ...defaultState,
    ...state,
  };

  values.setCardNumber = setCardNumber(state, setState);

  values.setCardExp = setCardExp(state, setState);

  values.setHolderName = setHolderName(state, setState);

  values.setCardCvc = setCardCvc(state, setState);

  values.setSubmit = handleSubmit(state, setState);

  return (
    <cardDataContext.Provider value={values}>
      {props.children}
    </cardDataContext.Provider>
  );
};

export default CardDataContext;
