import { useEffect, useState } from "react";
import useUsername from "./useUsername";
import axios from "axios";

const useGetMyProducts = (username) => {
  const [prodList, setProdList] = useState();

  const endpoint = "http://localhost:8000/api/product/my-products";

  useEffect(() => {
    if (username) {
      axios
        .post(endpoint, { username }, { withCredentials: true })
        .then((res) => {
          setProdList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [username]);

  return prodList;
};

export default useGetMyProducts;
