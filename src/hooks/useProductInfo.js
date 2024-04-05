import { useEffect, useState } from "react";
import requestWithCredentials from "@/services/requestWithCredentials.js";

const useProductInfo = (productId) => {
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    requestWithCredentials
      .get(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return productInfo;
};

export default useProductInfo;
