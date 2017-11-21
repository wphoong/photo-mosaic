import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { PhotoListFilters } from "../../components/PhotoListFilters.js";
import { filters, filters2 } from "../fixtures/filters.js";

let wrapper, setTextFilter, sortByDateAscend, sortByDateDescend, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDateAscend = jest.fn();
  sortByDateDescend = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <PhotoListFilters
      filters={filters} 
      setTextFilter={setTextFilter}
      sortByDateAscend={sortByDateAscend}
      sortByDateDescend={sortByDateDescend}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />);
});

// render photo list filters 
test("should render photo list filters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render photo list filters with filters2', () => {
  wrapper.setProps({
    filters: filters2
  });
  expect(wrapper).toMatchSnapshot();
});

// input text change
test("should call setTextFilter prop on text change", () => {
  const text = "LUL";
  wrapper.find("input").simulate("change", {
    target: { value: text }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

// select sort change ascend
test("should call sortByDateAscend prop on select change", () => {
  const ascend = "ascend";
  wrapper.find("select").simulate("change", {
    target: { value: ascend }
  });
  expect(sortByDateAscend).toHaveBeenLastCalledWith();
});

// select sort change descend
test("should call sortByDateAscend prop on select change", () => {
  const descend = "descend";
  wrapper.find("select").simulate("change", {
    target: { value: descend }
  });
  expect(sortByDateDescend).toHaveBeenLastCalledWith();
});

// date change
test("should handle date change", () => {
  const startDate = moment(0).subtract(2, "days");
  const endDate = moment(0).add(4, "days");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// focus change
test("should handle focus change", () => {
  const calenderFocused = "endDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calenderFocused);
  expect(wrapper.state("calenderFocused")).toBe(calenderFocused);
});