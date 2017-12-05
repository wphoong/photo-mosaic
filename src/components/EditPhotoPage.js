import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { startEditPhoto, startRemovePhoto } from "../actions/photos.js";

export class EditPhotoPage extends React.Component {
  onSubmit = (photo) => {
    this.props.startEditPhoto(this.props.photo.id, photo);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemovePhoto({id: this.props.photo.id});
    this.props.history.push("/");
  };
  render () {
    return (
      <div className="content-container">
        <h1>Edit Photo</h1>
        <PhotoForm 
          photo={this.props.photo} 
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
          className="button button--secondary"
        >
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  photo: state.photos.find((photo) => {
    return photo.id === props.match.params.id;
  })
});

const mapStateToDispatch = (dispatch, props) => ({
  startEditPhoto: (id, photo) => dispatch(startEditPhoto(id, photo)),
  startRemovePhoto: (data) => dispatch(startRemovePhoto(data))
});

export default connect(mapStateToProps, mapStateToDispatch)(EditPhotoPage);

