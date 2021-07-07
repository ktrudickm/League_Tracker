import React, { useState } from "react";
import API from "../../utils/API";

const AdminPage = (props) => {
  const { _id, name, image, key } = props.leagues;
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const handleEdit = (e) => {
    setInput(e);
    setValue(e);
  };

  const handleSubmit = () => {
    API.adminAddLeague({
      name: value,
      key: Math.floor(Math.random() * 100),
      image: "https://picsum.photos/200",
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Create League
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="League Name"
        aria-label="League Name"
        aria-describedby="basic-addon1"
        onChange={(e) => handleEdit(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
};

export default AdminPage;
