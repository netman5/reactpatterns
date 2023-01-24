import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import User from './User';
import Button from '@mui/material/Button';

const Users = ({ data, loading, handNavigation, ...props }) => {
  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Typography variant='h3' gutterBottom>Users</Typography>
      <User data={data} loading={loading} handNavigation={handNavigation} />
      <Button variant='contained' onClick={() => handNavigation('new')}>New User</Button>
    </Box>
  )
}

export default React.memo(Users)