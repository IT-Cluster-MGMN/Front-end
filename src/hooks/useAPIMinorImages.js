import { useEffect, useState } from "react"
import requestWithCredentials from "../services/requestWithCredentials";

const useAPIMinorImage = (id) => {

  const [minorImages, setMinorImages] = useState([]);

  useEffect(() => {
    requestWithCredentials.post(API_ENDPOINT, {id: id})
    .then((res) => {
        setMinorImages(res.data.images);
      })
    .catch((err) => {
        //TODO: ERROR PAGE
      })
  })

  return minorImages;
};

export default useAPIMinorImage;
