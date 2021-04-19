import React from "react";
import "./index.css";

const ValueInput = (props) => {
  const { fromAmount, convertValue } = props;
  return (
    <div className="value">
      <label htmlFor="value">Value</label>
      <input
        name="value"
        type="number"
        value={fromAmount}
        onChange={convertValue}
      />
    </div>
  );
};

export default ValueInput;
