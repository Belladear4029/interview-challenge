import * as React from "react";
import { shallow, mount } from "enzyme";
import MenuPreview from "./MenuPreview";
import ItemCard from "../ItemCard/ItemCard";
import { items } from "./mock.data";

const removeItem = () => {};

const shallowDefault = (props) =>
  shallow(<MenuPreview {...props} removeItem={(event) => removeItem(event)} />);
const mountDefault = (props) =>
  mount(<MenuPreview {...props} removeItem={(event) => removeItem(event)} />);

describe("<MenuPreview>", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault({ items });
    expect(wrapper).toMatchSnapshot();
  });
  it("receives correct props", () => {
    const wrapper = mountDefault({ items });
    expect(wrapper.props().items.length).toEqual(3);
    expect(wrapper.props().removeItem.length).toEqual(1);
  });
  it("renders the correct child components", () => {
    const wrapper = shallowDefault({ items });
    expect(wrapper.find(ItemCard).length).toEqual(3);
  });
});
