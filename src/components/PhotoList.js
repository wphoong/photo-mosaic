import React from "react";
import { connect } from "react-redux";
import PhotoListItem from "./PhotoListItem.js";
import getVisiblePhotos from "../selectors/photos.js";

const PhotoList = (props) => (
  <div>
    {
      props.photos.map((photo) => {
        return <PhotoListItem key={photo.id} {...photo} />
      })
    }
  </div>
);

const mapStateToProps = (state) => ({
  photos: getVisiblePhotos(state.photos, state.filters)
});

export default connect(mapStateToProps)(PhotoList);