import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

export const PhotoListItem = ({ id, photoLink, title, createdAt, description }) => (
  <div className="list-body">
    <img src={photoLink} height="300" width="300"/>
    <Link to={`/edit/${id}`}>
      <h3 className="list-item__title">{title}</h3>
    </Link>
    <h2 className="list-item__subtitle">{description}</h2>
    <p className="subtitle is-5">Created at: {moment(createdAt).format("MMM Do, YYYY")}</p>
  </div>
);

export default connect()(PhotoListItem);

