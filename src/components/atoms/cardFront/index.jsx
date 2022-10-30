import "./styles.css";
import imgBackground from "../../../assets/img/bg-card-front.png";
import { useContext, useEffect, useState } from "react";

import cardLogo from "../../../assets/img/card-logo.svg";

import { setValuesToState } from "./logic";
import { cardDataContext } from "../../../context/cardData";

/**
 * Element card (front)
 *
 * @returns {JSX.Element}
 */
const CardFront = () => {
  const { cardExp, cardNumber, holderName } = useContext(cardDataContext);

  const [cardState, setCardState] = useState({
    cardNumber: cardNumber,
    holderName: holderName,
    cardExp: cardExp,
  });

  useEffect(
    setValuesToState(
      {
        cardExp,
        cardNumber,
        holderName,
      },
      setCardState
    ),
    [cardExp, cardNumber, holderName]
  );

  return (
    <div
      className="card-front"
      style={{
        backgroundImage: `url(${imgBackground})`,
      }}
    >
      <div className="card-header">
        <img src={cardLogo} alt="card logo" />
      </div>
      <div className="card-body">
        <span>{cardState.cardNumber}</span>
      </div>
      <div className="folder-name">{cardState.holderName}</div>
      <div className="card-expire">{cardState.cardExp}</div>
    </div>
  );
};

export default CardFront;
