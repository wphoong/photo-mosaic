import React from "react";
import { shallow } from "enzyme";
import AddPhotoPage from "../../components/AddPhotoPage.js";

test("it should render the add photo page", () => {
  const wrapper = shallow(<AddPhotoPage />);
  expect(wrapper).toMatchSnapshot();
});