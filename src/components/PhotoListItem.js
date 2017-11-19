import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

export const PhotoListItem = ({ id, photoLink, title, createdAt, description }) => (
  <div>
    <img src={photoLink} height="300" width="300"/>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>{description}</p>
    <p>Created at: {moment(createdAt).format("MMM Do, YYYY")}</p>
  </div>
);

export default connect()(PhotoListItem);

