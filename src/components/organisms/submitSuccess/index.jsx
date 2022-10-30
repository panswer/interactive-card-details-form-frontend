import successIcon from "../../../assets/img/icon-complete.svg";

import "./styles.css";

import { cardDataContext } from "../../../context/cardData";

import BtnSubmit from "../../atoms/btnSubmit";
import { useContext } from "react";

/**
 * Request success
 *
 * @returns {JSX.Element}
 */
const SubmitSuccess = () => {
  const { setSubmit } = useContext(cardDataContext);
  return (
    <div className="submit-success">
      <div className="imgContainer">
        <img src={successIcon} alt="success icon" />
      </div>
      <h1 className="message-title">thank you!</h1>
      <span className="message-description">We've added your card details</span>
      <BtnSubmit text="continue" onClick={setSubmit} />
    </div>
  );
};

export default SubmitSuccess;
