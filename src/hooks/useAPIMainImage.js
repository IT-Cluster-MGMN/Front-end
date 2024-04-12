import { useEffect, useState } from "react";
import requestWithoutCredentials from "../services/requestWithoutCredentials";

const useAPIMainImage = (id) => {
  const API_REQUEST = "http://localhost:8000/api/product/photo/main";

  const [image, setImage] = useState();

  useEffect(() => {
    requestWithoutCredentials
      .post(API_REQUEST, { id: id })
      .then((res) => {
        setImage(res.data.photo);
      })
      .catch((err) => {
        //TODO: error page
      });
  }, [id]);

  return image;
};

export default useAPIMainImage;
