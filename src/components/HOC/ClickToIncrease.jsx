import React from "react";
import withCounter from "./Withcounter";

function ClickToIncrease({ counter, incrementCounter }) {
  const [fontSize, setFontSize] = React.useState(counter);

  return (
    <div>
      <button onClick={() => incrementCounter()}>Click to increase</button>
      <p style={{ fontSize }}>Font size is: {fontSize}</p>
      <p>Props coming HOC: {counter}</p>
    </div>
  );
}

export default withCounter(ClickToIncrease, 10);