// @flow
import React from "react";
import ItemCard from "./ItemCard";

type Props = {
  items: Array<{
    name: string,
    id: number,
    dietaries: Array<string>,
  }>,
  selectItem: Function,
};

const MenuPicker = ({ items, selectItem }: Props): React$Element<React$FragmentType> => (
  <React.Fragment>
    <div className="filters">
      <input className="form-control" placeholder="Name" />
    </div>

    {items.length && (
      <ul className="item-picker">
        {items.map((item) => (
          <li
            onClick={() => selectItem(item.id)}
            key={item.id}
            className="item"
          >
            <ItemCard item={item} />
          </li>
        ))}
      </ul>
    )}
  </React.Fragment>
);

export default MenuPicker;
