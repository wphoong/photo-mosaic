import moment from "moment";
import filtersReducer from "../../reducers/filters.js";
import { filters, filters2 } from "../fixtures/filters.js";

test("should setup default filters", () => {
  const state = filtersReducer(undefined, {type: "@@init"} );
  expect(state).toEqual(filters);
});

test("should set text filter", () => {
  const text = "WTF";
  const action = { 
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set sort by date ascend", () => {
  const action = {
    type: "SORT_BY_DATE_ASCEND"
  };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe("ascend");
});

test("should set sort by date desend", () => {
  const action = {
    type: "SORT_BY_DATE_DESCEND"
  };
  const state = filtersReducer(filters2, action);
  expect(state.sortBy).toBe("descend");
});

test("should set start date", () => {
  const startDate = moment(0).subtract(3, "days");
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set end date", () => {
  const endDate = moment(0).add(3, "days");
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});



