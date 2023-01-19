import axios from 'axios';
import React from 'react'

const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (url) => {
    const response = await axios(url);
    return response.data;
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData(url)
      .then((data) => {
        setData(data);
        setLoading(false);
      }
      );
  }, [url]);

  return [data, loading];
}

export default useFetch