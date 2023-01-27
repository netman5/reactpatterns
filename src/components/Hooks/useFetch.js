import axios from 'axios';
import React from 'react'

const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async (url) => {
    const response = await axios(url);
    return response.data;
  }, []);

  React.useEffect(() => {
    setLoading(true);

    fetchData(url)
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .then((data) => {
        setData(data);
        setLoading(false);

      });
  }, [url, fetchData]);

  return [data, loading, error];
}

export default useFetch