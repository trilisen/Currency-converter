import "./App.css";
import ValueInput from "./components/ValueInput";
import CurrencySelect from "./components/CurrencySelect";
import InfoArea from "./components/InfoArea";
import React, { useEffect, useState } from "react";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAmount, setFromAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [convertedValue, setConvertedValue] = useState("");

  const url = `https://api.currencyscoop.com/v1/`;
  const { REACT_APP_API_KEY } = process.env;

  useEffect(() => {
    fetch(`${url}currencies?api_key=${REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        setCurrencyOptions([...Object.values(json.response.fiats)]);
        setFromCurrency([json.response.fiats["GBP"].currency_code]);
        setToCurrency([json.response.fiats["USD"].currency_code]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [REACT_APP_API_KEY, url]);

  useEffect(() => {
    fetch(
      `${url}convert?api_key=${REACT_APP_API_KEY}&base=${fromCurrency}&to=${toCurrency}&amount=${fromAmount}`
    )
      .then((res) => res.json())
      .then((json) => {
        setConvertedValue(json.response.value);
      });
  }, [url, REACT_APP_API_KEY, fromCurrency, toCurrency, fromAmount]);

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  const handleFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Currency Converter</h1>
      <main>
        <ValueInput
          fromAmount={fromAmount}
          convertValue={handleFromAmountChange}
        />
        <div className="currencySelectContainer">
          <CurrencySelect
            toOrFrom="From"
            currencies={currencyOptions}
            handleChange={handleFromCurrency}
            selected={fromCurrency}
          />
          <p>--&gt;</p>
          <CurrencySelect
            toOrFrom="To"
            currencies={currencyOptions}
            handleChange={handleToCurrency}
            selected={toCurrency}
          />
        </div>
        <InfoArea
          convertedValue={convertedValue}
          fromAmount={fromAmount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      </main>
    </div>
  );
}

export default App;
