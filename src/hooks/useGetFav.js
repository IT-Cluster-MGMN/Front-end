import { useEffect, useState } from "react";

const useGetFav = () => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("favourites")) {
      const favList = sessionStorage.getItem("favourites").split(",");
      if (favList[0] !== "") {
        setFavourites(favList);
      } else {
        setFavourites(null);
      }
    }
  }, [sessionStorage]);

  return favourites;
};

export default useGetFav;
