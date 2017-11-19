import React from "react";
import { shallow } from "enzyme";
import moment from  "moment";
import PhotoForm from "../../components/PhotoForm.js";
import photos, { photos2 } from "../fixtures/photos.js";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PhotoForm />);
});

test("should render Photo Form", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render photo form with photo data", () => {
  wrapper = shallow(<PhotoForm photo={photos[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should set photolink on input change", () => {
  const value = "asdf";
  wrapper.find("input").at(0).simulate("change", {
    target: { value }
  });
  expect(wrapper.state("photoLink")).toBe(value);
});

test("should set title on input change", () => {
  const value ="new title";
  wrapper.find("input").at(1).simulate("change", {
    target: { value }
  });
  expect(wrapper.state("title")).toBe(value);
});

test("should set date on date change", () => {
  const now = moment();
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should set focus on focus change", () => {
  const focused = true;
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused});
  expect(wrapper.state("calenderFocused")).toEqual(focused);
});

test("should set description on textarea change", () => {
  const value = "new description";
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("description")).toBe(value);
});

test("should render error for invalid form submission", () => {
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

// onsubmit for provided values
test("should call onSubmit for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  wrapper = shallow(<PhotoForm photo={photos2[0]} onSubmit={onSubmitSpy} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith(photos2[0]);
});

