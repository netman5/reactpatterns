import React from 'react'

const LeftSide = () => {
  const [test, setTest] = React.useState('')

  return (
    <div>
      LeftSide
      <input type="text" name='test' id='test' value={test} onChange={(e) => setTest(e.target.value)} />
      
      <p>{test}</p>
    </div>
  )
}

export default LeftSide