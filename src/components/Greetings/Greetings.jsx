import React from 'react'

const Greetings = ({ name, ...restProps}) => {
  return (
    <div {...restProps}>
      <h1>Hello {name}</h1>
    </div>
  )
}

export default Greetings