import React from "react";
import { Header } from "../../components/Header.js";
import { shallow } from "enzyme";
import { startLogOut } from "../../actions/auth.js";
import { firebase } from "../../firebase/firebase.js";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header startLogOut={{} = {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("should call start log out on button click", () => {
  const startLogOutSpy = jest.fn();
  const wrapper = shallow(<Header startLogOut={startLogOutSpy} />);
  wrapper.find("button").simulate("click");
  expect(startLogOutSpy).toHaveBeenCalled();
});