import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

/*
    const circles = ["red", "green", "yellow", "orange"];
     <button onClick={() => { circles.push("MidnightBlue"); console.log(circles);}}
      > ADD  </button>
    State is NOT rerendered when variables are updated outside of state
*/

const ColoredCircles = () => {
  //["red", "green", "yellow", "orange"]
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => [
      ...circles,
      { color, x: getRandom(), y: getRandom() },
    ]); // makes new array
  };

  //   const changePosition = (index) => {
  //     setCircles((circles) => {
  //       const copy = [...circles];
  //       copy[index].x = getRandom();
  //       copy[index].y = getRandom();
  //       return copy;
  //     });
  //   };

  const changePosition = (index) => {
    setCircles((circles) =>
      circles.map((circle, i) =>
        i === index ? { ...circle, x: getRandom(), y: getRandom() } : circle,
      ),
    );
  };

  const randomize = () => {
    setCircles((circles) =>
      circles.map((c) => ({ ...c, x: getRandom(), y: getRandom() })),
    );
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
      {circles.map(({ color, x, y }, index) => (
        <Circle
          changePosition={changePosition}
          color={color}
          index={index}
          key={index}
          x={x}
          y={y}
        />
      ))}
      <button onClick={randomize}>Randomize All</button>
    </div>
  );
};

export default ColoredCircles;
