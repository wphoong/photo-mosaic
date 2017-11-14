import React from "react";
import 'react-dates/initialize';
import PhotoListFilters from "./PhotoListFilters.js";
import PhotoList from "./PhotoList.js";

const DashboardPage = () => (
  <div>
    <h1>This my dashboard</h1>
    <PhotoListFilters />
    <PhotoList />
  </div>
);

export default DashboardPage;

