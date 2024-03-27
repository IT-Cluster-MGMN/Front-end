import requestWithCredentials from "../services/requestWithCredentials.js";

const useAddProduct = async (data, images) => {
  const IMAGES_ENDPOINT = "http://localhost:8000/api/product/photo/add";
  const INFO_ENDPOINT = "http://localhost:8000/api/product/add";

  requestWithCredentials.post(INFO_ENDPOINT, data).then((res) => {
    const formData = new FormData();
    formData.append("file", images[0]);
    formData.append("id", res.data.productId);
    requestWithCredentials
      .post(IMAGES_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .catch((err) => console.log(err));
  });
};

export default useAddProduct;
