import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Header from "./components/Header/Header";
import MenuPicker from "./components/MenuPicker/MenuPicker";
import MenuPreview from "./components/MenuPreview/MenuPreview";
import { items } from './mock.data';

const shallowDefault = () => shallow(<App />);
const mountDefault = () => mount(<App />);

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
  it("saves user search to state and filters items", () => {
    const wrapper = mountDefault();
    const menuPicker = wrapper.find(MenuPicker);
    wrapper.setState({ items });
    menuPicker.find('input').simulate('change', { target: { value: 'Kale' } });
    expect(wrapper.state('search')).toBe('Kale');
    expect(wrapper.instance().filteredItems().length).toBe(1);
  });
  it("adds item to selectedItems array in state", () => {
    const wrapper = shallowDefault();
    wrapper.setState({ items });
    wrapper.instance().selectItem(10010);
    expect(wrapper.state('selectedItems').length).toEqual(1);
    expect(wrapper.state('selectedItems')[0].id).toEqual(10010);
  });
  it("removes item from selectedItems array in state", () => {
    const wrapper = shallowDefault();
    wrapper.setState({ items });
    wrapper.setState({ selectedItems: items });
    expect(wrapper.state('selectedItems').length).toEqual(5);
    wrapper.instance().removeItem(10010);
    expect(wrapper.state('selectedItems').length).toEqual(4);
    expect(wrapper.state('selectedItems').find(item => item.id === 10010)).toBeUndefined();
  });
});
