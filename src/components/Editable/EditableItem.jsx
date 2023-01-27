import React from 'react'
import useToggle from '../Hooks/useToggle'
// import Input from './Input';

const EditableItem = (props) => {
  const [value, setValue] = React.useState(props.initialValue)
  const [editorVisible, setEditorVisible] = useToggle(false);

  const label = props.label || 'Edit'

  const onchange = (text) => {
    setValue(text)
  }
  return props.render(value, onchange, editorVisible, setEditorVisible, label)
}

export default EditableItem