import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { addPhoto } from "../actions/photos.js";

export class AddPhotoPage extends React.Component {
  onSubmit = (photo) => {
    this.props.addPhoto(photo);
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

const mapStateToDispatch = (dispatch) => ({
  addPhoto: (photo) => dispatch(addPhoto(photo))
});

export default connect(undefined, mapStateToDispatch)(AddPhotoPage);