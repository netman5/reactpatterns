import React, { useState } from 'react';
import withCounter from './Withcounter';

function HoverToIncrease({ counter, incrementCounter, secretWord }) {
  const [fontSize, setFontSize] = useState(10);

  console.log(secretWord);
  return (
    <div>
      <button onMouseEnter={() => incrementCounter()}>Hover to increase</button>
      <p style={{ fontSize: counter }}>The Font size ot this element is: {counter}</p>
      <p>Props coming HOC: {counter}</p>
    </div>
  )
}

export default withCounter(HoverToIncrease, 5)  