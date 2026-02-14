import React from "react";
import "./Circle.css";

const Circle = ({ color, index, x, y, changePosition }) => {
  //onsole.log(color, x, y);
  return (
    <div
      onClick={() => changePosition(index)}
      className="Circle"
      style={{
        backgroundColor: color,
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
      }}
    >
      {index + 1}
    </div>
  );
};

export default Circle;
