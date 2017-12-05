import React from "react";
import { connect } from "react-redux";
import PhotoListItem from "./PhotoListItem.js";
import getVisiblePhotos from "../selectors/photos.js";

export const PhotoList = (props) => (
  <div>
    { props.photos.length !== 0 && <h3>Showing {props.photos.length} Photo(s)</h3>}
    { props.photos.length === 0 ? 
      (
        <div>
          <span>Showing 0 Photos</span>
        </div>
      ) : 
        <div className="columns is-multiline is-tablet">
          {
            props.photos.map((photo) => {
              return (
                <div className="column is-one-third">
                  <PhotoListItem key={photo.id} {...photo} />
                </div>
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