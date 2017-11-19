import React from "react";
import { shallow } from "enzyme";
import { PhotoList } from "../../components/PhotoList.js";
import photos from "../fixtures/photos.js";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<PhotoList photos={photos}/>);
});

test("should render photo list with provided photos", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render 0 photos with no provided photos", () => {
  wrapper = shallow(<PhotoList photos={[]} />);
  expect(wrapper).toMatchSnapshot();
});