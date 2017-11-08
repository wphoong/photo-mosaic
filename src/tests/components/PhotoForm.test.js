import React from "react";
import { shallow } from "enzyme";
import PhotoForm  from "../../components/PhotoForm.js";

test("it should render Photo Form", () => {
  const wrapper = shallow(<PhotoForm />);
  expect(wrapper).toMatchSnapshot();
});