import "./styles.css";

/**
 * @typedef {import('react')} React
 */

/**
 * Button submit
 *
 * @param {object} props - properties
 * @param {string} [props.text] - text on button
 * @param {(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void} [props.onClick]
 * @param {React.CSSProperties} [props.style]
 *
 * @returns {JSX.Element}
 */
const BtnSubmit = (props) => {
  return (
    <button className="btn-submit" onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  );
};

export default BtnSubmit;
