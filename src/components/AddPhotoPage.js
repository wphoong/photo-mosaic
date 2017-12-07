import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { startAddPhoto } from "../actions/photos.js";

export class AddPhotoPage extends React.Component {
  onSubmit = (photo) => {
    this.props.startAddPhoto(photo);
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="content-container">
        <div>
          <h1 className="header__secondary title is-2" >Add Photo</h1>
        </div>
        <div>
          <PhotoForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => ({
  startAddPhoto: (photo) => dispatch(startAddPhoto(photo))
});

export default connect(undefined, mapStateToDispatch)(AddPhotoPage);