import React, { Component } from "react";
import API from "../../utils/API";
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
    const user = API.getUserData().then((res) => this.setState(user));
  }

  onDrop(imageFile, imageDataURLs) {
    API.addUserImage(imageFile);
    this.setState({
      image: this.state.image.concat(imageFile),
    });
  }

  render() {
    const { username, first_name, last_name, date_of_birth, image } =
      this.props;
    return (
      <div className="card">
        <h1>{username}</h1>
        <img src={image} className="card-img-top" alt="..." />
        <ImageUploader
          withIcon={true}
          buttonText="Choose image"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <div className="card-body">
          <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
          <p className="card-text">{`DoB: ${date_of_birth}`}</p>
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
