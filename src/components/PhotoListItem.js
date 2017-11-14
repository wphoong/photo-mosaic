import React from "react";
import moment from "moment";

const PhotoListItem = ({photoLink, title, createdAt, description}) => (
  <div>
    THIS IS MY PHOTO LIST ITEM COMPONENT
    <p>{photoLink}</p>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Created at: {moment(createdAt).format("MMM Do, YYYY")}</p>
  </div>
);

export default PhotoListItem;

