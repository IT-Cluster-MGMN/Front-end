import axios from "axios";

const useAddProduct = async (data, images, setErrMsg) => {
  const IMAGES_ENDPOINT = "http://localhost:8000/api/product/photo/add";
  const INFO_ENDPOINT = "http://localhost:8000/api/product/add";

  const resInfo = await axios.post(INFO_ENDPOINT, data, {
    withCredentials: true,
  });

  const imageUploadPromises = [];
  for (const image of images) {
    try {
      const res = await fetch(image);
      const blob = await res.blob();
      const file = new File([blob], "File name", { type: "image/jpeg" });
      const formData = new FormData();
      formData.append("file", file, "image.jpg");
      formData.append("id", resInfo.data.productId);
      const uploadResponse = await axios.post(IMAGES_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      imageUploadPromises.push(uploadResponse);
    } catch (err) {
      setErrMsg(err.message);
      return;
    }
  }

  axios
    .all(imageUploadPromises)
    .then(() => {
      window.location.href = "../";
    })
    .catch((err) => {
      setErrMsg(err.message);
    });
};

export default useAddProduct;
