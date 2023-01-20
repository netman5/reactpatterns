import React, { Suspense } from 'react';
import useFetch from '../../components/Hooks/useFetch';
import Users from '../users/Users';
import { useNavigate } from 'react-router-dom';

const Practice = () => {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users');
  const navigate = useNavigate();

  const handNavigation = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="Apps">
      <Suspense fallback={<div>Loading...</div>}>
        <Users data={data} loading={loading} handNavigation={handNavigation} />
      </Suspense>
    </div>
  );
}

export default Practice;