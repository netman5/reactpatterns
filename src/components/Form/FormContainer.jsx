import React from 'react'
import FormChild from './FormChild'

const FormContainer = () => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    phone: '',
    work: '',
  });

  console.log(data);
  return (
    <div>
      <FormChild onChange={(info) => setData(info)} />
    </div>
  )
}

export default FormContainer