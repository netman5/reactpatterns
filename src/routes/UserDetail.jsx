import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../components/Hooks/useFetchId';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Details from './Details';
import '../App.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, loading] = useFetchById('https://jsonplaceholder.typicode.com/users', id);

  if (!user || undefined) return null;

  return (
    <Container>
      <Typography variant='h2' gutterBottom mt={5}>User Detail</Typography>
      <Details user={user} loading={loading} className='box' />
    </Container>
  )
}

export default React.memo(UserDetail)