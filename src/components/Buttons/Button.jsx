import React from 'react'

const Button = ({ text, ...buttonProps }) => {
  return (
    <button {...buttonProps}>{text}</button>
  )
}

export default Button