import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

export const PhotoListItem = ({ id, photoLink, title, createdAt, description }) => (
  <div className="column is-one-third">
    <div className="list-body">
    <div>
      <Link to={`/edit/${id}`}>
        <h3 className="list-item__title">{title}</h3>
      </Link>
    </div>
    <img className="image" src={photoLink} height="400" width="400"/>
    { description && <h2 className="list-item__subtitle">{description}</h2> }
    <p className="list-item--message subtitle is-5">Created at: {moment(createdAt).format("MMM Do, YYYY")}</p>
    </div>
  </div>
);

export default connect()(PhotoListItem);

