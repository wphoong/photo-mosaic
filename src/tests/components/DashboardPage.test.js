import React from "react";
import { shallow } from "enzyme";
import { DashboardPage } from "../../components/DashboardPage.js";
import photos from "../fixtures/photos.js";

test("should render expense dashboard page correctly", ()=> {
  const wrapper = shallow(<DashboardPage photos={photos} />);
  expect(wrapper).toMatchSnapshot();
});