const useAddToFav = (id) => {
  if (sessionStorage.getItem("favourites")) {
    const currentFav = sessionStorage.getItem("favourites").split(",");
    if (currentFav.indexOf(id.toString()) === -1) {
      sessionStorage.setItem("favourites", [...currentFav, id].toString());
    }
  } else {
    sessionStorage.setItem("favourites", [id].toString());
  }
};

export default useAddToFav;
