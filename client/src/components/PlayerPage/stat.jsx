import React from "react";
import { formatLabel } from "./../../utils/formatLabel";

const Stat = (props) => {
  const { name, stat } = props;
  return (
    <li className="statItem">
      <span style={{ fontWeight: "bolder" }}>{formatLabel(name)}</span>: {stat}
    </li>
  );
};

export default Stat;
