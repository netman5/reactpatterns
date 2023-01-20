import React, { Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../components/Hooks/useFetchId';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const UserDetail = () => {
  const { id } = useParams();
  const [user, loading] = useFetchById('https://jsonplaceholder.typicode.com/users', id);

  if (!user || undefined) return null;

  const { name, phone, email, address, company } = user;
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Typography variant='h2' gutterBottom mt={5}>User Detail</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', border: '1px solid red' }}>
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
        <div>
          <button onClick={() => window.history.back()}>Back</button>
        </div>
      </Suspense>
    </Container>
  )
}

export default React.memo(UserDetail)