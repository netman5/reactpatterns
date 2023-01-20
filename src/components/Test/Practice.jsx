import React from 'react';
import useFetch from '../../components/Hooks/useFetch';
import Users from '../users/Users';

const Practice = () => {
  const [data, loading] = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Apps">
      <Users data={data} />
    </div>
  );
}

export default Practice;