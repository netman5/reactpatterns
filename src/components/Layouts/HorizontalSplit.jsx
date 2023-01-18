import React from 'react'

const HorizontalSplit = (props) => (
    <div style={{ 'display': 'flex', "justifyContent": 'space-between'}}>
      <div>{props.startSide}</div>
      <div>{props.endSide}</div>
    </div>
)

export default HorizontalSplit