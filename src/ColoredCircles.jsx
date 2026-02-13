import React, { useState } from "react";
import Circle from "./Circle";

/*
    const circles = ["red", "green", "yellow", "orange"];
     <button onClick={() => { circles.push("MidnightBlue"); console.log(circles);}}
      > ADD  </button>
    State is NOT rerendered when variables are updated outside of state
*/

const ColoredCircles = () => {
  const [circles, setCircles] = useState(["red", "green", "yellow", "orange"]);
  const addCircle = () => {
    setCircles((circles) => [...circles, "Blue"]); // makes new array
  };

  return (
    <div>
      {circles.map((color, index) => (
        <Circle color={color} index={index} key={index} />
      ))}
      <button onClick={addCircle}>ADD</button>
    </div>
  );
};

export default ColoredCircles;
