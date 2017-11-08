import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { startAddPhoto } from "../actions/photos.js";

class AddPhotoPage extends React.Component {
  onSubmit = (photo) => {
    this.props.startAddPhoto(photo);
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <div>
          <h1>Add Photos</h1>
        </div>
        <div>
          <PhotoForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default AddPhotoPage;