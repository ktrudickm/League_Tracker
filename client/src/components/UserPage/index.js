import React, { useState, useEffect } from "react";
import PasswordModal from "./passwordModal";
import API from "../../utils/API";
import { formatDate } from "../../utils/formatDate";
// import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload";
import "./style.css";

function UserPage(props) {
  const [userData, setUserData] = useState({});
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  function loadUserData() {
    API.getSingleUserData("60dbb3c0fd472e39b8477820")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err.message));
  }

  const toggleModal = () => {
    setModal(!showModal);
  };

  const handlePasswordChange = (e) => {
    console.log("changed");
  };

  const onDrop = (imageFile, imageURL) => {
    console.log(imageURL);
    const base64 = imageURL[0];
    const base64URL = base64.split(";base64,").pop();
    API.updatePlayerImage(userData._id, { imageURL: base64URL })
      .then((res) => {
        setUserData({ ...userData, image: res.data.image });
      })
      .catch((err) => console.log(err.message));
  };

  let imgSrc =
    userData.image === "https://picsum.photos/200"
      ? "https://picsum.photos/200"
      : null;

  return (
    <>
      <PasswordModal
        toggle={toggleModal}
        showModal={showModal}
        prevPassword={userData.password}
      />
      <div className="card align-items-center">
        <h1>{userData.username}</h1>
        <img
          src={imgSrc || `data:image/png;base64,${userData.image}`}
          className="card-img-top"
          alt="..."
        />
        <ImageUploader
          withIcon={false}
          withPreview={false}
          singleImage={true}
          buttonText="Choose image"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          fileSizeError=" file size is too big"
        />
        <div className="card-body">
          <h5 className="card-title">
            {userData.first_name} {userData.last_name}
          </h5>
          <p className="card-text">
            <span style={{ fontWeight: "bolder" }}>Birthdate:</span>{" "}
            {userData.date_of_birth && formatDate(userData.date_of_birth)}
          </p>
          <button
            type="button"
            className="btn btn-warning"
            data-toggle="modal"
            data-target="#passwordModal"
            onClick={toggleModal}
          >
            Change Password
          </button>
        </div>
        <ul className="list-group list-group-flush"></ul>
        <div className="card-body"></div>
      </div>
    </>
  );
}

export default UserPage;
