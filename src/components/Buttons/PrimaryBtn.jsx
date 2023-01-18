import React from 'react'
import classnames from 'classnames'


const Btn = ({ text, className, primary, ...buttonProps }) => (
  <button type='button' className={classnames('btn', primary && "primary-btn", className)} {...buttonProps}>{text}</button>
)
const PrimaryBtn = (props) => <Btn {...props} />

export default PrimaryBtn