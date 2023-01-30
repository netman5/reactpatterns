import React from 'react'

const withCounter = (WrappedComponent, increaseCount) => {
  function NewComponent(props) {
    const [count, setCount] = React.useState(10);
    return <WrappedComponent
      counter={count}
      incrementCounter={() => setCount((count) => count + increaseCount)}
      {...props}
    />
  }

  return NewComponent;
}

export default withCounter;