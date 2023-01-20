import React from 'react';

function Count({ text, count }) {
  console.log("Count rendering");
  return (
    <div>
      {text} is {count}
    </div>
  );
}
export default React.memo(Count);