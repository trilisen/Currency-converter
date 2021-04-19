import React from "react";
import "./index.css";
import CurrencyOption from "./../CurrencyOption";

const CurrencySelect = (props) => {
  const { currencies, handleChange, selected, toOrFrom } = props;
  return (
    <div className="currencyOptionContainer">
      <label>{toOrFrom}</label>
      <select id="currencies" onChange={handleChange} value={selected}>
        {currencies.map((currency, key) => (
          <CurrencyOption
            key={key}
            index={key}
            currencyName={currency.currency_name}
            currencyCode={currency.currency_code}
          />
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
