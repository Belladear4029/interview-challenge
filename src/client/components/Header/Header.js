import React from "react";

type Props = {
  items: Array<{
    name: string,
    id: number,
    dietaries: Array<string>,
  }>,
};

const Header = ({ items }: Props): React$Element<React$FragmentType> => {
  const dietaryTypes = ["ve", "v", "n!", "df", "gf", "rsf"];

  const dietaryCount = (type) => {
    let count = 0;
    items.forEach((item) => {
      item.dietaries.forEach((dietary) => dietary === type && count++);
    });
    return count;
  };

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{items.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {dietaryTypes.map((type) => (
              <span key={type}>
                {dietaryCount(type)}x<span className="dietary">{type}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
