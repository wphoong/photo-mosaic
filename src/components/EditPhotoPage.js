import React from "react";
import { connect } from "react-redux";
import PhotoForm from "./PhotoForm.js";
import { editPhoto, removePhoto } from "../actions/photos.js";

const EditPhotoPage = (props) => {
  console.log("props", props.photo);
  return (
    <div>
      <p>Showing edit expense page for {props.match.params.id}</p>
      <PhotoForm 
        photo={props.photo} 
        onSubmit={(photo) => {
          props.dispatch(editPhoto(props.photo.id, photo));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removePhoto({id: props.photo.id}));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  )
};

// class EditPhotoPage extends React.Component {
//   onSubmit = (photo) => {
//     console.log('updated', photo)
//     this.props.startEditPhoto(this.props.photo.id, photo);
//     this.props.history.push("/");
//   };
//   render () {
//     return (
//       <div>
//         <p>Showing edit expense page for {this.props.match.params.id}</p>
//         <PhotoForm 
//           photo={this.props.photo} 
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     );
//   }
// }

const mapStateToProps = (state, props) => ({
  photo: state.photos.find((photo) => {
    return photo.id === props.match.params.id;
  })
});

// const mapStateToDispatch = (dispatch, props) => ({
//   startEditPhoto: (id, photo) => dispatch(editPhoto(id, photo))
// });

export default connect(mapStateToProps)(EditPhotoPage);

