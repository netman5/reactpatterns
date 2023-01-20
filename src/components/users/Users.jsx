import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Users = ({ data, loading, handNavigation, ...props }) => {
  return (
    <Box {...props} sx={{ width: '80%', margin: '0 auto' }}>
      <Typography variant='h3' gutterBottom>Users</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {loading ? (<>Loading...</>) : (
          data.map(({ name, id, email }) => (
            <Grid item key={id} xs={2} sm={6} md={12}>
              <Box onClick={() => handNavigation(id)} sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Typography variant='h6'>{name}</Typography>
                <Typography variant='body1'>{email}</Typography>
                <Button variant='outlined'>view</Button>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default React.memo(Users)