import React from 'react'
import useFetch from '../../components/Hooks/useFetch';

const Provider = (props) => {
  const [data, loading, error] = useFetch(props.url);
  return props.render(data, loading, error)
}

export default Provider