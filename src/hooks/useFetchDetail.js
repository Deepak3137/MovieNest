import axios from "axios";
import { useEffect, useState } from "react"

const useFetchDetail = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const respone = await axios.get(endpoint);
      setLoading(false);
      setData(respone.data);
    } catch (error) {
      console.log("fetchError", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {data, loading};
}

export default useFetchDetail;