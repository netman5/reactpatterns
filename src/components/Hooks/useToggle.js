import React from 'react'

const useToggle = (initialValue) => {
  const [toggle, setToggle] = React.useState(initialValue);
  const handleToggle = React.useCallback(() => setToggle(!toggle), [toggle]);
  return [toggle, handleToggle];
}

export default useToggle;