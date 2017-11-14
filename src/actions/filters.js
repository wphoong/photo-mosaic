import React from "react";

export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const sortByDateAscend = () => ({
  type: "SORT_BY_DATE_ASCEND"
});

export const sortByDateDescend = () => ({
  type: "SORT_BY_DATE_DESCEND"
});

export const setStartDate = (startDate = {}) => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = (endDate = {}) => ({
  type: "SET_END_DATE",
  endDate
});