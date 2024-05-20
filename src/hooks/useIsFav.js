import { useEffect, useState } from "react";
import useGetFav from "./useGetFav";

const useIsFav = (id) => {
  const [isFav, setIsFav] = useState(false);

  const favList = useGetFav();
  useEffect(() => {
    if (favList) {
      if (favList.includes(String(id))) {
        setIsFav(true);
      }
    }
  }, [favList]);

  return [isFav, setIsFav];
};

export default useIsFav;
