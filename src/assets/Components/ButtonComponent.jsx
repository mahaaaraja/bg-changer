import "../Styles/ComponentStyles.css"
import { useState } from "react";

const ButtonComponent = props => {

  
  let { buttonColor, textColor, text } = props;
  let bgColor = buttonColor;

  const [buttonText, setButtonText] = useState(text);

  const generateRandomHex = () => {
    const hexValues = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    return hexValues[Math.floor(Math.random() * 16)];
  }

  const generateHexCode = () => {
    let hexCode = '#';
    for(let i = 0; i < 6; i++) {
      hexCode += generateRandomHex();
    }
    return hexCode;
  }

  

  const handleClick = () => {
    if (text === "Random") {
      bgColor = generateHexCode();
      setButtonText(bgColor);
    }
    props.onClick(bgColor);
  }

  return (
    <button
      className="rounded-pill hello px-3 py-1 text-center border border-primary"
      style={{ backgroundColor: buttonColor, color: textColor }}
      onClick={() => handleClick()}
    >
      {buttonText}
    </button>
  );
}

export default ButtonComponent;