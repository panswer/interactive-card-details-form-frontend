import imgBackground from "../../../assets/img/bg-card-back.png";
import "./styles.css";

import { cardDataContext } from "../../../context/cardData";
import { useContext } from "react";

/**
 * Element card (back)
 * 
 * @returns {JSX.Element}
 */
const CardBack = () => {
  const { cardCvc } = useContext(cardDataContext);
  return (
    <div
      className="card-back"
      style={{
        backgroundImage: `url(${imgBackground})`,
      }}
    >
      <span className="cvc">{cardCvc || "000"}</span>
    </div>
  );
};

export default CardBack;
