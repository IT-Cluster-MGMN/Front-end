import axios from "axios";

const useAddProduct = async (data, images) => {
  const IMAGES_ENDPOINT = "http://localhost:8000/api/product/photo/add";
  const INFO_ENDPOINT = "http://localhost:8000/api/product/add";

  try {
    const resInfo = await axios.post(INFO_ENDPOINT, data, {
      withCredentials: true,
    });

    const imageUploadPromises = images.map((image) => {
      return fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "File name", { type: "image/jpeg" });
          const formData = new FormData();
          formData.append("file", file, "image.jpg");
          formData.append("id", resInfo.data.productId);
          return axios.post(IMAGES_ENDPOINT, formData, {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          });
        });
    });

    await Promise.all(imageUploadPromises);

    window.location.href = "../";
  } catch (err) {
    console.log(err);
  }
};

export default useAddProduct;
