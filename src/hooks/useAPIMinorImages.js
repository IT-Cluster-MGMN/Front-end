import { useEffect, useState } from "react";
import requestWithCredentials from "../services/requestWithCredentials";
import axios from "axios";

const useAPIMinorImage = (id) => {
  const [minorImages, setMinorImages] = useState([]);

  const API_ENDPOINT = "http://localhost:8000/api/product/photo/other";

  useEffect(() => {
    axios
      .post(API_ENDPOINT, { id: id })
      .then((res) => {
        setMinorImages(res.data);
      })
      .catch((err) => {
        //TODO: ERROR PAGE
      });
  }, [id]);

  return minorImages;
};

export default useAPIMinorImage;
