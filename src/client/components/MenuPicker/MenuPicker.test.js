import * as React from "react";
import { shallow, mount } from "enzyme";
import MenuPicker from "./MenuPicker";
import { items } from "./mock.data";

const handleSearch = () => {};
const selectItem = () => {};

const shallowDefault = (props) =>
  shallow(
    <MenuPicker
      {...props}
      handleSearch={(event) => handleSearch(event)}
      selectItem={(event) => selectItem(event)}
    />
  );
const mountDefault = (props) =>
  mount(
    <MenuPicker
      {...props}
      handleSearch={(event) => handleSearch(event)}
      selectItem={(event) => selectItem(event)}
    />
  );

describe("<MenuPicker>", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault({ items });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correct props", () => {
    const wrapper = mountDefault({ items });
    expect(wrapper.props().items.length).toEqual(5);
  });
});
