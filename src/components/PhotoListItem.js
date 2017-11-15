import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

const PhotoListItem = ({ id, photoLink, title, createdAt, description }) => (
  <div>
    THIS IS MY PHOTO LIST ITEM COMPONENT
    <p>{photoLink}</p>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
    <p>Created at: {moment(createdAt).format("MMM Do, YYYY")}</p>
  </div>
);

export default connect()(PhotoListItem);

