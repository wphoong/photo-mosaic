import React from "react";
import { shallow } from "enzyme";
import { EditPhotoPage } from "../../components/EditPhotoPage.js";
import photos from "../fixtures/photos.js";

let wrapper, editPhoto, removePhoto, history;

beforeEach(() => {
  editPhoto = jest.fn();
  removePhoto = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditPhotoPage 
      photo={photos[0]}
      editPhoto={editPhoto} 
      removePhoto={removePhoto} 
      history={history}
    />);
});

test("should render edit photo page", () =>{
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit for edit expense", () => {
  wrapper.find("PhotoForm").prop("onSubmit")(photos[0]);
  expect(editPhoto).toHaveBeenLastCalledWith(photos[0].id, photos[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle on click for remove expense", () => {
  wrapper.find("button").simulate("click");
  expect(removePhoto).toHaveBeenLastCalledWith({ id: photos[0].id});
  expect(history.push).toHaveBeenLastCalledWith("/");
});
