import React from "react";

type Props = {
  items: Array<{
    name: string,
    id: number,
    dietaries: Array<string>,
  }>,
};

const Header = ({ items }: Props): React$Element<React$FragmentType> => {

  const dietaryCount = (type) => {
    let count = 0;
    items.forEach((item) => {
      item.dietaries.forEach(dietary => dietary === type && count++);
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
            {dietaryCount("ve")}x<span className="dietary">ve</span>
            {dietaryCount("ve")}x<span className="dietary">v</span>
            {dietaryCount("n!")}x<span className="dietary">n!</span>
            {dietaryCount("df")}x<span className="dietary">df</span>
            {dietaryCount("gf")}x<span className="dietary">gf</span>
            {dietaryCount("rsf")}x<span className="dietary">rsf</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
