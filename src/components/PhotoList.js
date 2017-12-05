import React from "react";
import { connect } from "react-redux";
import PhotoListItem from "./PhotoListItem.js";
import getVisiblePhotos from "../selectors/photos.js";

export const PhotoList = (props) => (
  <div>
    { props.photos.length === 0 ? 
      (
        <div>
         Showing 0 Photos
        </div>
      ) : 
        <div className="columns is-multiline is-half-mobile is-one-third-tablet">
          {
            props.photos.map((photo) => {
              return (
                  <PhotoListItem key={photo.id} {...photo} />
                );
            })
          }
        </div>
    }
  </div>
);

const mapStateToProps = (state) => ({
  photos: getVisiblePhotos(state.photos, state.filters)
});

export default connect(mapStateToProps)(PhotoList);