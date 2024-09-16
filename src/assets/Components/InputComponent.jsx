import { useState } from "react";
import "../Styles/ComponentStyles.css"

const InputComponent = props => {

  const [textColor, setTextColor] = useState('black');

  const isValidColorCode = (colorCode) => {
    let s = new Option().style;
    s.color = colorCode;

    if(s.color) {
      return true;
    } else {
      return false;
    }
  }

  const handleOnKeyUp = (e) => {
    if(isValidColorCode(e.target.value)) {
      setTextColor('black');
    } else {
      setTextColor('red');
    }
    let bgColor;
    if(e.key === 'Enter' && isValidColorCode(e.target.value)) {
      bgColor = e.target.value;
      props.onkeyup(bgColor);
    }
  }

  return (
    <input
      className="p-2 rounded-pill input-container"
      type="text"
      placeholder={props.text}
      style={{ color: textColor }}
      defaultValue={"#"}
      maxLength={9}
      onKeyUp={(e) => handleOnKeyUp(e)}
    />
  );
}

export default InputComponent;