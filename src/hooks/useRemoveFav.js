const useRemoveFav = (id) => {
  const currentFav = sessionStorage.getItem("favourites").split(",");

  const index = currentFav.indexOf(id);
  if (index !== -1) {
    currentFav.splice(index, 1);
    sessionStorage.setItem("favourites", currentFav.toString());
  }

  window.location.reload();
};

export default useRemoveFav;
