import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

/*
    const circles = ["red", "green", "yellow", "orange"];
     <button onClick={() => { circles.push("MidnightBlue"); console.log(circles);}}
      > ADD  </button>
    State is NOT rerendered when variables are updated outside of state
*/

const ColoredCircles = () => {
  const [circles, setCircles] = useState(["red", "green", "yellow", "orange"]);
  const addCircle = (color) => {
    setCircles((circles) => [...circles, color]); // makes new array
  };

  return (
    <div>
      <ColorButtons
        options={["pink", "purple", "blue"]}
        addCircle={addCircle}
      />
      <ColorButtons
        options={["teal", "limegreen", "magenta"]}
        addCircle={addCircle}
      />
      {circles.map((color, index) => (
        <Circle color={color} index={index} key={index} />
      ))}
    </div>
  );
};

export default ColoredCircles;
