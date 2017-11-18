import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { editPhoto, removePhoto } from "../actions/photos.js";

export class EditPhotoPage extends React.Component {
  onSubmit = (photo) => {
    this.props.editPhoto(this.props.photo.id, photo);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removePhoto({id: this.props.photo.id});
    this.props.history.push("/");
  };
  render () {
    return (
      <div>
        <PhotoForm 
          photo={this.props.photo} 
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
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
  editPhoto: (id, photo) => dispatch(editPhoto(id, photo)),
  removePhoto: (data) => dispatch(removePhoto(data))
});

export default connect(mapStateToProps, mapStateToDispatch)(EditPhotoPage);

