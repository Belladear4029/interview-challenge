import * as React from "react";
import { shallow, mount } from "enzyme";
import MenuPicker from "./MenuPicker";
import ItemCard from "../ItemCard/ItemCard";
import { items } from "./mock.data";

const handleSearch = jest.fn();
const selectItem = jest.fn();

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
  it("receives correct props", () => {
    const wrapper = mountDefault({ items });
    expect(wrapper.props().items.length).toEqual(5);
    expect(wrapper.props().handleSearch.length).toEqual(1);
    expect(wrapper.props().selectItem.length).toEqual(1);
  });
  it("renders the correct child components", () => {
    const wrapper = shallowDefault({ items });
    expect(wrapper.find(ItemCard).length).toEqual(5);
  });
  it("calls selectItem function on click of item", () => {
    const wrapper = shallowDefault({ items });
    wrapper.find('.item').first().simulate('click');
    expect(selectItem).toHaveBeenCalledTimes(1);
  });
  it("calls handleSearch function on user input", () => {
    const wrapper = shallowDefault({ items });
    wrapper.find('input').simulate('change');
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
