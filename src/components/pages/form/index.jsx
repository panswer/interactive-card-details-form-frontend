import FormCard from "../../organisms/formCard";
import Cards from "../../organisms/cards";
import "./styles.css";

import CardDataContext, { cardDataContext } from "../../../context/cardData";

import SubmitSuccess from "../../organisms/submitSuccess";

/**
 * @returns {JSX.Element}
 */
const PageForm = () => {
  return (
    <CardDataContext>
      <div className="form-container">
        <div className="background"></div>
        <Cards />
        <cardDataContext.Consumer>
          {({ submit }) =>
            submit ? (
              <div className="form-card-success">
                <SubmitSuccess />
              </div>
            ) : (
              <div className="form-card">
                <FormCard
                  style={{
                    gridArea: "form",
                  }}
                />
              </div>
            )
          }
        </cardDataContext.Consumer>
      </div>
    </CardDataContext>
  );
};

export default PageForm;
