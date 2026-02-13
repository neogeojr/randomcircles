import React from "react";
import "./ColorButtons.css";

const ColorButtons = ({ options, addCircle }) => {
  return (
    <div className="ColorButtons">
      {options.map((color, index) => (
        <button
          className="ColorButtons-btn"
          style={{ backgroundColor: color }}
          key={index}
          onClick={() => addCircle(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorButtons;
