import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Header from "./components/Header/Header";
import MenuPicker from "./components/MenuPicker/MenuPicker";
import MenuPreview from "./components/MenuPreview/MenuPreview";

const shallowDefault = () => shallow(<App />);

describe("<App>", () => {
  it("renders the component", () => {
    const wrapper = shallowDefault;
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the correct child components", () => {
    const wrapper = shallowDefault();
    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(MenuPicker).length).toEqual(1);
    expect(wrapper.find(MenuPreview).length).toEqual(1);
  });
});
