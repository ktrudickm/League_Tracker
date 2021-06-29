import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { formatDate } from "../../utils/formatDate";
// import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload";
import "./style.css";

function UserPage(props) {
  const [userData, setUserData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    image: "",
  });

  useEffect(() => {
    API.getUserData("ARudiger").then((res) =>
      setUserData({
        username: res.data[0].username,
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        date_of_birth: res.data[0].date_of_birth,
        image: res.data[0].image,
      })
    );
  }, []);

  const onDrop = (imageFile, imageURL) => {
    console.log(imageURL);
    const base64 = imageURL[0];
    const base64URL = base64.split(";base64,").pop();
    API.updatePlayerImage(username, { imageURL: base64URL })
      .then((res) => {
        setUserData({ ...userData, image: res.data.image });
      })
      .catch((err) => console.log(err.message));
  };

  const { username, first_name, last_name, date_of_birth, image } = userData;
  let imgSrc =
    image === "https://picsum.photos/200" ? "https://picsum.photos/200" : null;

  return (
    <div className="card align-items-center">
      <h1>{username}</h1>
      <img
        src={imgSrc || `data:image/png;base64,${image}`}
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
          {first_name} {last_name}
        </h5>
        <p className="card-text">
          <span style={{ fontWeight: "bolder" }}>Birthdate:</span>{" "}
          {formatDate(date_of_birth)}
        </p>
        <button type="button" className="btn btn-warning">
          Change Password
        </button>
      </div>
      <ul className="list-group list-group-flush">
        {/* {stats.map((stat) => (
          <Stat key={_id} stat={stat} />
        ))} */}
      </ul>
      <div className="card-body">{/* Player bio? Team name? */}</div>
    </div>
  );
}

export default UserPage;
