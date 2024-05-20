import axios from "axios";

const useDeleteMyProduct = (id) => {
  const endpoint = "http://localhost:8000/api/product/delete";

  axios
    .delete(endpoint, { id }, { withCredentials: true })
    .then(() => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

export default useDeleteMyProduct;
