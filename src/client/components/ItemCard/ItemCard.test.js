import * as React from "react";
import { shallow, mount } from "enzyme";
import ItemCard from "./ItemCard";
import { item } from "./mock.data";

const removeItem = () => {};

const shallowDefault = (props) =>
  shallow(<ItemCard {...props} removeItem={(event) => removeItem(event)} />);

const mountDefault = (props) =>
  mount(<ItemCard {...props} removeItem={(event) => removeItem(event)} />);

describe("<ItemCard>", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault({ item });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correct props", () => {
    const wrapper = mountDefault({ item });
    expect(wrapper.props().item).toEqual(item);
  });
});
