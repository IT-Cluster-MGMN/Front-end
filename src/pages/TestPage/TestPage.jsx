import { useRef, useState } from "react";
import ImageCropper from "../../components/ImageCropper";
import Loading from "../../components/Loading";
import axios from "axios";

const TestPage = () => {
  let lorem =
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.";
  const [output, setOutput] = useState();
  const [images, setImages] = useState([]);

  const [image, setImage] = useState();
  axios
    .post(
      "http://localhost:8000/api/account/avatar/get",
      {
        username: "c@email.com",
      },
      { withCredentials: true },
    )
    .then((res) => setImage(res.data.photo));
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImages((prev) => [...prev, e.target.files[0]])}
      />
      {image ? <img src={`data:image/jpeg;base64,${image}`} /> : null}
    </>
  );
};
export default TestPage;
