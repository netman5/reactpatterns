import React from 'react'
import '../../App.css'

const Button = ({ text, className, ...buttonProps }) => {
  const classNames = ['btn', className].filter(Boolean).join(' ')
  return (
    <button type='button' className={classNames} {...buttonProps}>{text}</button>
  )
}

export default Button