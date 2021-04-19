import React from "react";
import "./index.css";

const CurrencyOption = (props) => {
  const { currencyName, currencyCode } = props;
  return (
    <option value={currencyCode} className="currencyOption">
      {currencyCode + ": " + currencyName}
    </option>
  );
};

export default CurrencyOption;
