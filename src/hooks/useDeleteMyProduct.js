import axios from "axios";

const useDeleteMyProduct = (id) => {
  const endpoint = "";

  axios
    .delete(endpoint, { id }, { withCredentials: true })
    .catch((err) => console.log(err));
};

export default useDeleteMyProduct;
