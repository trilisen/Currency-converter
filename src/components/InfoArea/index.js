import React from "react";
import "./index.css";

const InfoArea = (props) => {
  const { convertedValue, fromAmount, fromCurrency, toCurrency } = props;
  return (
    <div>
      <p>
        {fromCurrency} {fromAmount} = {toCurrency} {convertedValue}
      </p>
    </div>
  );
};

export default InfoArea;
