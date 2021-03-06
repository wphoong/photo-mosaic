import React from "react";
import { shallow } from "enzyme";
import { AddPhotoPage } from "../../components/AddPhotoPage.js";
import photos from "../fixtures/photos.js";

let wrapper, startAddPhoto, history;

beforeEach(() => {
  startAddPhoto = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPhotoPage startAddPhoto={startAddPhoto} history={history} />);
});

test("it should render the add photo page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("PhotoForm").prop("onSubmit")(photos[0]);
  expect(startAddPhoto).toHaveBeenLastCalledWith(photos[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});