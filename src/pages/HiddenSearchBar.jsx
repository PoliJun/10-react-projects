import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/HiddenSearchBar.scss";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "hsb-container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <div className="hsb-root">
      <section
        className="hsb-container"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}>
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </section>
    </div>
  );
};
export default HiddenSearchBar;
