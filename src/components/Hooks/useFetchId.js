import axios from 'axios';
import React from 'react'

export const useFetchById = (url, id) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = React.useCallback(async (url) => {
    const response = await axios(`${url}/${id}`);
    return response.data;
  }, [id]);

  React.useEffect(() => {
    setLoading(true);
    fetchData(url)
      .then((data) => {
        setData(data);
        setLoading(false);
      }
      );
  }, [url, id, fetchData]);

  return [data, loading];
}