import React from 'react'
import FormChild from './FormChild'
import Input from '../Editable/Input'

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
      <Input initialValue={'Deborah Oyewole'} label={'name'} />
    </div>
  )
}

export default FormContainer