import * as React from "react";
import { shallow, mount } from "enzyme";
import Header from "./Header";
import { items } from "./mock.data";

const shallowDefault = (props) => shallow(<Header {...props} />);
const mountDefault = (props) => mount(<Header {...props} />);

describe("<Header>", () => {
  it("renders correctly", () => {
    const wrapper = shallowDefault({ items });
    expect(wrapper).toMatchSnapshot();
  });
  it("renders correct props", () => {
    const wrapper = mountDefault({ items });
    expect(wrapper.props().items.length).toEqual(5);
  });
});
