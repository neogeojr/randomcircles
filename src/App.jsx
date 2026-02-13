import { useState } from "react";
import Circle from "./Circle";
import ColoredCircles from "./ColoredCircles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ColoredCircles />
    </>
  );
}

export default App;
