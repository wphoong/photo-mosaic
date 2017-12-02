import React from "react";
import moment from "moment";
import {
  setTextFilter,
  sortByDateAscend,
  sortByDateDescend,
  setStartDate,
  setEndDate, 
} from "../../actions/filters.js";

test("should set text filter with provided value", () => {
  const text = "WTF";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should set text filter with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should sort by date ascending", () => {
  const action = sortByDateAscend();
  expect(action).toEqual({
    type: "SORT_BY_DATE_ASCEND"
  });
});

test("should sort by date descending", () => {
  const action = sortByDateDescend();
  expect(action).toEqual({
    type: "SORT_BY_DATE_DESCEND"
  });
});

test("should set start date", () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate
  });
});

test("should set end date", () => {
  const endDate = moment(1);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate
  });
});
