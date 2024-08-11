import axios from "axios";
import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const respone = await axios.get(endpoint);
      setLoading(false);
      setData(respone.data.results);
    } catch (error) {
      console.log("fetchError", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {data, loading};
}

export default useFetch;