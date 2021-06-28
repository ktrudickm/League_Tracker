import React, { Component } from "react";
import API from "../../utils/API";
import { formatDate } from "../../utils/formatDate";
// import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload";
import "./style.css";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      date_of_birth: "",
      image: "",
    };
    this.onDrop = this.onDrop.bind(this);
  }
  componentDidMount() {
    API.getUserData("MNeuer").then((res) =>
      this.setState({
        username: res.data[0].username,
        first_name: res.data[0].first_name,
        last_name: res.data[0].last_name,
        date_of_birth: res.data[0].date_of_birth,
      })
    );
  }
  onDrop = async (imageFile, imageDataURL) => {
    console.log(imageFile);
    console.log(imageDataURL);

    this.setState({
      image: imageFile[0].name,
    });
  };

  render() {
    const { username, first_name, last_name, date_of_birth, image } =
      this.state;
    return (
      <div className="card">
        <h1>{username}</h1>
        <img src={image} className="card-img-top" alt="..." />
        <ImageUploader
          withIcon={true}
          withPreview={false}
          singleImage={true}
          buttonText="Choose image"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          fileSizeError=" file size is too big"
        />
        <div className="card-body">
          <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
          <p className="card-text">{`DoB: ${formatDate(date_of_birth)}`}</p>
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
}

export default UserPage;
