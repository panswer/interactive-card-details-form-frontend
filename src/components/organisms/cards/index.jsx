import CardBack from "../../atoms/cardBack";
import CardFront from "../../atoms/cardFront";
import "./styles.css";

/**
 * Cards
 * 
 * @returns {JSX.Element}
 */
const Cards = () => {
  return (
    <div className="cards">
      <div className="card-front-float top">
        <CardFront />
      </div>
      <div className="card-back-float">
        <CardBack />
      </div>
    </div>
  );
};

export default Cards;
