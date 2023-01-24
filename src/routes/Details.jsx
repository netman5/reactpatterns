import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

const Details = ({ user, loading, ...props }) => {
  const { name, phone, email, address, company } = user;
  const navigate = useNavigate();
  return (
    <div {...props}>
      <Box mb={5} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {loading ? (
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        ) : (
          <Stack direction='row' spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ width: 100, height: 100 }}>{name[0]}</Avatar>
            </Box>
            <Box sx={{ width: '500%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4'>{name}</Typography>
              <Typography variant='body1'>Phone: {phone}</Typography>
              <Typography variant='body1'>Email: {email}</Typography>
              <Typography variant='body1'>Address: {address?.street}, {address?.city}.</Typography>
              <Typography variant='body1'>Work at: {company.name}</Typography>
            </Box>
          </Stack>
        )}
      </Box>
      <Button variant='contained' onClick={() => navigate(-1)}>Return to users</Button>
    </div>
  )
}

export default Details