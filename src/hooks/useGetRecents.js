import axios from "axios";
import { useEffect, useState } from "react";

const useGetRecents = (setErrorMsg) => {
  const API_ENDPOINT = "http://localhost:8000/api/product/recent";

  const [recents, setRecents] = useState(null);

  useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then((res) => setRecents(res.data))
      .catch((err) => setErrorMsg(err.message));
  }, []);

  return recents;
};

export default useGetRecents;
