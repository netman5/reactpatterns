import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormChild = ({ onChange }) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    phone: '',
    work: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onChange(data)
    setData({
      name: '',
      email: '',
      phone: '',
      work: '',
    })
  }

  return (
    <Box component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          helperText="Enter full name"
          name='name'
          value={data.name}
          type="text" onChange={handleChange} />
        <TextField
          required
          id="outlined-required"
          label="Email"
          helperText="Enter email"
          name='email'
          value={data.email}
          type="email" onChange={handleChange} />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          helperText="Enter phone number"
          name='phone'
          value={data.phone}
          type="text" onChange={handleChange} />
        <TextField
          required
          id="outlined-required"
          label="Work Place"
          helperText="Enter work"
          name='work'
          value={data.work}
          type="text" onChange={handleChange} />
      </div>
      <Button variant="contained" type='submit'>Submit</Button>
    </Box>
  )
}

export default FormChild