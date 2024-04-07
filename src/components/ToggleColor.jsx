import { useState } from "react";
import "../styles/ToggleColor.scss";

const ToggleColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <section className="clr-root">
      <div className="container" style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            background: buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}>
          White Theme
        </button>
        <div className="content">
          <h1>
            Welcome To A <br />
            Real World
          </h1>
        </div>
      </div>
    </section>
  );
};
export default ToggleColor;
