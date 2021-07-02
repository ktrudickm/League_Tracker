import React, { useState, useEffect } from "react";
import PasswordModal from "./passwordModal";
import EditModal from "./editModal";
import API from "../../utils/API";
import { useAppContext } from "../../utils/context";
import { formatDate } from "../../utils/formatDate";
import ImageUploader from "react-images-upload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function UserPage(props) {
  const [userData, setUserData] = useState({});
  const [showModal, setModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [editField, setEditField] = useState("");

  const editIcon = <FontAwesomeIcon icon={faPencilAlt} />;

  const { sessionID } = useAppContext();

  useEffect(() => {
    loadUserData();
  }, [editField]);

  function loadUserData() {
    API.getSingleUserData(sessionID)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err.message));
  }

  const toggleModal = () => {
    setModal(!showModal);
  };

  const handleEdit = (field) => {
    // console.log(id);
    setEditField(field);
    setEditModal(!showEditModal);
  };

  const handlePasswordChange = (password) => {
    API.updatePlayerPassword(userData._id, { password: password })
      .then((res) => res.json(res.data))
      .catch((err) => console.log(err.message));
  };

  const handleEditAPI = (field, value) => {
    API.updatePlayer(userData._id, { [field]: value })
      .then((res) => {
        res.json(res.data);
      })
      .catch((err) => console.log(err.message));
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
        onSubmit={handlePasswordChange}
      />
      <EditModal
        toggle={handleEdit}
        showModal={showEditModal}
        onEdit={handleEditAPI}
        field={editField}
      />
      <div className="card align-items-center playerCard">
        <h1 id="userName">{userData.username}</h1>
        <img
          src={imgSrc || `data:image/png;base64,${userData.image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="imageUploader">
          <ImageUploader
            buttonClassName="uploadButton"
            withLabel={false}
            withIcon={false}
            withPreview={false}
            singleImage={true}
            buttonText="Upload image"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            fileSizeError="File size is too big. Max size is 5mb."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span className="nameText">
              {userData.first_name} {userData.last_name}
            </span>
          </h5>
          <ul className="card-text">
            <li className="infoElement">
              <span style={{ fontWeight: "bolder" }}>Birthdate:{` `}</span>
              {userData.date_of_birth && formatDate(userData.date_of_birth)}
              {` `}
              <sup>
                {" "}
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="editIcon"
                  onClick={() => handleEdit("date_of_birth")}
                />
              </sup>
            </li>
            <li className="infoElement">
              <span style={{ fontWeight: "bolder" }}>Email:{` `}</span>
              {userData.email}
              {` `}
              <sup>
                {" "}
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="editIcon"
                  onClick={() => handleEdit("email")}
                />
              </sup>
            </li>
            <li className="infoElement">
              <span style={{ fontWeight: "bolder" }}>Phone:{` `}</span>
              {userData.phone}
              {` `}
              <sup>
                {" "}
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="editIcon"
                  onClick={() => handleEdit("phone")}
                />
              </sup>
            </li>
            <li className="infoElement">
              <span style={{ fontWeight: "bolder" }}>Password:{` `}</span>
              **********
              {` `}
              <sup>
                <button className="editIcon" onClick={toggleModal}>
                  {editIcon}
                </button>
              </sup>
            </li>
          </ul>
          {/* <button
            type="button"
            className="btn passwordButton"
            data-toggle="modal"
            data-target="#passwordModal"
            onClick={toggleModal}
          >
            <span className="buttonText">Change Password</span>
          </button> */}
        </div>
        <ul className="list-group list-group-flush"></ul>
        <div className="card-body"></div>
      </div>
    </>
  );
}

export default UserPage;
