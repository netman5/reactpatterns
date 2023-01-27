import React from 'react'
import elementResizeDetectorMaker from 'element-resize-detector'

function Observe(props) {
  const [state, setState] = React.useState({ width: null, height: null })

  const elementToObserve = React.createRef()

  React.useEffect(() => {
    const erd = elementResizeDetectorMaker({ strategy: 'scroll' })
    const elementCurrnet = elementToObserve.current
    erd.listenTo(elementToObserve.current, (element) => {
      const currentWidth = element.offsetWidth
      const currentHeight = element.offsetHeight
      setState({ width: currentWidth, height: currentHeight })
    })

    return () => {
      erd.removeAllListeners(elementCurrnet)
    }
  }, [elementToObserve])
  return props.render(state, elementToObserve)
}

export default Observe