import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import "./tailwind.css";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4, validate } from "uuid";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const initialState = {
  name: "",
  price: "",
};

const Organiser = () => {
  const [data, setdata] = useState(initialState);

  const { name, price } = data;

  const [file, setfile] = useState(null);
  // const [progress, setprogress] = useState(null);
  // const [err, seterr] = useState({});
  // const [isSubmit, setisSubmit] = useState(false);
  // const nav = useNavigate();
  // const param = useParams();
  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;
  //     const storageRef = ref(storage, `images/${file.name}`);
  //     const uploadTask = uploadBytesResumable(storageRef, file);
  //     uploadTask.on("state_changed", (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setprogress(progress);
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log( "the upload is paused ");
  //           break;
  //         case "running":
  //           console.log( "the upload is running ");
  //           break;
  //         default:
  //           break;
  //       }},(error)=>{
  //       console.log(error);},()=>{
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadurl)=>{
  //         setdata((prev)=>({...prev,img:downloadurl}))
  //       });
  //     }
  //     );
  //   };

  //   file &&  uploadFile()
  //   }, [file]);

  useEffect(() => {
    const upload = () => {
      const imageListRef = ref(storage, `images/`);
      // const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytes(storageRef, file);

      listAll(imageListRef).then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setdata((prev) => ({ ...prev, img: url })); // Update the state directly
          });
        });
      });
    };
    file && upload();
  }, [file]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "imageInfo"), {
      ...data,
      timestamp: serverTimestamp(),
    });
    alert("uploaded");

    console.log(data);
  };

  return (
    <div>
      <button
        onClick={() => {
          setvalue(4);
          console.log(value);
        }}
      >
        press
      </button>

      {/* {isSubmit ? (
        <>
          <h1>already submitted</h1>
        </>
      ) : ( */}
      <>
        <div className="container">
          <div className="boxa text-center">
            <h1>Upload Your Art</h1>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      name="name"
                      onChange={handlechange}
                      value={name}
                      id="form6Example4"
                      placeholder="Name"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example4">
                      Art name
                    </label>
                  </div>{" "}
                  <div class="form-outline mb-4">
                    <input
                      type="name"
                      id="form6Example5"
                      name="price"
                      onChange={handlechange}
                      value={price}
                      placeholder="price"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example5">
                      Art price
                    </label>
                  </div>
                  <label class="form-label" for="customFile">
                    Default file input example
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    label="image"
                    name="image"
                    onChange={(e) => {
                      setfile(e.target.files[0]);
                    }}
                  />
                  <button type="submit" class="btn btn-primary btn-block my-4">
                    Upload
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Organiser;
