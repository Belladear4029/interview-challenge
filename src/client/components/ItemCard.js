// @flow
import React from "react";
import { render } from "react-dom";

type Props = {
  item: {
    id: number,
    name: string,
    dietaries: Array<string>,
  },
  removeItem?: Function,
};

const ItemCard = ({ item, removeItem }: Props): React$Element<"div"> => {
  const { id, name, dietaries } = item;

  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p>
        {dietaries.map((dietary, i) => (
          <span key={i} className="dietary">
            {dietary}
          </span>
        ))}
      </p>
      {removeItem && (
        <button onClick={() => removeItem(id)} className="remove-item">
          x
        </button>
      )}
    </div>
  );
};

export default ItemCard;
