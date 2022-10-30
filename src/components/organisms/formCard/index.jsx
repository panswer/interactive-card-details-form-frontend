import { useContext, useEffect, useState, useRef, useCallback } from "react";
import "./styles.css";

import { cardDataContext } from "../../../context/cardData";

import { setMonthTime, setYearTime, handlerFocus } from "./logic";
import BtnSubmit from "../../atoms/btnSubmit";
import { parseFormatStr } from "../../../utils/functions/format";

/**
 * @typedef {object} FormCardProps
 * @property {import('react').CSSProperties} [style]
 */

/**
 * @typedef {object} CardExpTimeSchema
 * @property {string} expMonth
 * @property {string} expYear
 */

/**
 * Form Card
 * @param {FormCardProps} props - properties
 * @returns {JSX.Element}
 */
const FormCard = (props) => {
  const {
    cardNumber,
    setCardNumber,
    setCardExp,
    holderName,
    setHolderName,
    cardCvc,
    setCardCvc,
    setSubmit,
    cardNumberError,
    cardExpError,
    holderNameError,
    cardCvcError,
  } = useContext(cardDataContext);
  const [cardExpTime, setCardExpTime] = useState({
    expMonth: "",
    expYear: "",
  });
  const [numberFormat, setNumber] = useState("");

  const refCardNumer = useRef(null);

  const updateCardExp = useCallback(() => {
    const monthExp = cardExpTime.expMonth || "00";
    const yearExp = cardExpTime.expYear || "00";
    const time = `${monthExp}/${yearExp}`;

    setCardExp(time);
  }, [cardExpTime, setCardExp]);
  useEffect(updateCardExp, [cardExpTime]);

  useEffect(() => {
    const newValue = parseFormatStr(cardNumber);

    setNumber(newValue);
  }, [cardNumber]);

  return (
    <form style={props.style} className="form" onSubmit={setSubmit}>
      <div className="input-group">
        <label htmlFor="cardholder-name">cardholder name</label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="e.g. Jane Appleseed"
          className={holderNameError ? "error" : ""}
          value={holderName}
          onChange={setHolderName}
        />
        <span className="msg-error">{holderNameError}</span>
      </div>
      <div className="input-group relative">
        <label htmlFor="card-number">card number</label>
        <input
          type="text"
          name="formatNumber"
          id="formatNumber"
          value={numberFormat}
          disabled={true}
          onFocus={handlerFocus(refCardNumer)}
        />
        <input
          type="text"
          id="card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          className={cardNumberError ? "error" : ""}
          onChange={setCardNumber}
          value={cardNumber}
          ref={refCardNumer}
        />
        <span className="msg-error">{cardNumberError}</span>
      </div>
      <div className="input-row w-90 grid-center mt-1">
        <div className="input-group">
          <label htmlFor="card-exp">exp. date (mm/yy)</label>
          <div className="input-row">
            <div className="input-group">
              <input
                placeholder="MM"
                type="text"
                name="expMonth"
                id="exp-month"
                className={cardExpError && !cardExpTime.expMonth ? "error" : ""}
                value={cardExpTime.expMonth}
                onChange={(e) => {
                  setMonthTime(e, cardExpTime, setCardExpTime);
                }}
              />
            </div>
            <div className="input-group">
              <input
                placeholder="YY"
                type="text"
                name="expYear"
                id="exp-year"
                className={cardExpError && !cardExpTime.expYear ? "error" : ""}
                value={cardExpTime.expYear}
                onChange={(e) => {
                  setYearTime(e, cardExpTime, setCardExpTime);
                }}
              />
            </div>
          </div>
          <span className="msg-error l-0">{cardExpError}</span>
        </div>
        <div className="input-group">
          <label htmlFor="card-cvc">cvc</label>
          <input
            placeholder="e.g. 123"
            type="text"
            name="cvcCard"
            id="cvc-card"
            className={cardCvcError ? "error" : ""}
            value={cardCvc}
            onChange={setCardCvc}
          />
          <span className="msg-error l-0">{cardCvcError}</span>
        </div>
      </div>
      <BtnSubmit text="confirm" />
    </form>
  );
};

export default FormCard;
