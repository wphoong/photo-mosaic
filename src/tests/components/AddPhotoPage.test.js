import React from "react";
import { shallow } from "enzyme";
import { AddPhotoPage } from "../../components/AddPhotoPage.js";
import photos from "../fixtures/photos.js";

let wrapper, addPhoto, history;

beforeEach(() => {
  addPhoto = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddPhotoPage addPhoto={addPhoto} history={history} />);
});

test("it should render the add photo page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("PhotoForm").prop("onSubmit")(photos[0]);
  expect(addPhoto).toHaveBeenLastCalledWith(photos[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});