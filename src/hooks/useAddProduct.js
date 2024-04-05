import requestWithCredentials from "../services/requestWithCredentials.js";

const useAddProduct = async (data, images) => {
  const IMAGES_ENDPOINT = "http://localhost:8000/api/product/photo/add";
  const INFO_ENDPOINT = "http://localhost:8000/api/product/add";

  requestWithCredentials.post(INFO_ENDPOINT, data).then((resInfo) => {
    images.forEach((image) => {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/jpeg" });
          const formData = new FormData();
          formData.append("file", file, "image.jpg");
          formData.append("id", resInfo.data.productId);
          requestWithCredentials
            .post(IMAGES_ENDPOINT, formData, {
              headers: { "Content-Type": "multipart/form-data" },
            })
            .catch((err) => console.log(err));
        });
    });
  });
};

export default useAddProduct;
