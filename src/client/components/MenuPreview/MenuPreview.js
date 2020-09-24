// @flow
import React from "react";
import ItemCard from '../ItemCard/ItemCard'

type Props = {
  items: Array<{
    name: string,
    id: number,
    dietaries: Array<string>,
  }>,
  removeItem: Function
};

const MenuPreview = ({ items, removeItem }: Props): React$Element<React$FragmentType> => (
  <React.Fragment>
    <h2>Menu preview</h2>
    {items.length && (
      <ul className="menu-preview">
        {items.map((item) => (
          <li key={item.id} className="item">
            <ItemCard item={item} hasRemoveIcon={true} removeItem={removeItem} />
          </li>
        ))}
      </ul>
    )}
  </React.Fragment>
);

export default MenuPreview;
