import * as React from "react";
import { shallow, mount } from "enzyme";
import ItemCard from "./ItemCard";
import { item } from "./mock.data";

const removeItem = jest.fn();

const shallowDefault = (props) =>
  shallow(<ItemCard {...props} removeItem={(event) => removeItem(event)} />);

const mountDefault = (props) =>
  mount(<ItemCard {...props} removeItem={(event) => removeItem(event)} />);

describe("<ItemCard>", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault({ item });
    expect(wrapper).toMatchSnapshot();
  });
  it("receives correct props", () => {
    const wrapper = mountDefault({ item });
    expect(wrapper.props().item).toEqual(item);
    expect(wrapper.props().removeItem.length).toEqual(1);
  });
  it("renders correct information", () => {
    const wrapper = shallowDefault({ item });
    const name = wrapper.find('h2').text();
    const dietary = wrapper.find('.dietary').first().text();
    expect(name).toEqual(item.name);
    expect(dietary).toEqual(item.dietaries[0]);
  });
  it("calls removeItem function on click of remove item button", () => {
    const wrapper = shallowDefault({ item });
    wrapper.find('.remove-item').simulate('click');
    expect(removeItem).toHaveBeenCalledTimes(1);
  });
});
