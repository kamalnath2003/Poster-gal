import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


const Uploader = () => {
  const imageListRef = ref(storage, `images/`);
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const upload = () => {
    if (image == null) return;
    const imageref = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageref, image).then(() => {
      alert("uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]); // Update the state directly
        });
      });
    });
  }, []);
  return (
    <div className="container">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={upload}>Upload</button>

      {imageList.map((url) => {
        return <img className="w-100" src={url} />;
      })}
    </div>
  );
};

export default Uploader;
