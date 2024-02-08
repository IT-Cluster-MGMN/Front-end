import { useEffect, useState } from "react"
import requestWithCredentials from '../services/requestWithCredentials';

const useAPIMainImage = (id) => {

  const API_REQUEST = 'http://localhost:8000/api/product/photo/main';

  const [image, setImage] = useState(null);

  useEffect(()=> {
    requestWithCredentials.get(API_REQUEST, {"id": id})
    .then((res) => {
        setImage(res.data.image);
      })
    .catch((err) => {
        //TODO: error page
      })
  }, [])

  return image;
};

export default useAPIMainImage;
