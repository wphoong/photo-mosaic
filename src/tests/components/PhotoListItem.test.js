import React from "react";
import { shallow } from "enzyme";
import { PhotoListItem } from "../../components/PhotoListItem.js";
import photos from "../fixtures/photos.js";

test("should render photolist item correctly", () => {
  const wrapper = shallow(<PhotoListItem key={photos[0].id} {...photos[0]} />);
  expect(wrapper).toMatchSnapshot();
});