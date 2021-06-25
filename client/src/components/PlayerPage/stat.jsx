import React from "react";

const Stat = (props) => {
  const { name, stat } = props;
  return (
    <li className="list-group-item">
      `${name}: ${stat}
    </li>
  );
};

export default Stat;
