import React from "react";

export const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  text
});

export const sortByDateAscend = () => ({
  type: "SORT_BY_DATE_ASCEND"
});

export const sortByDateDescend = () => ({
  type: "SORT_BY_DATE_DESCEND"
});