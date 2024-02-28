import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState("$"); // Добавляем начальное состояние

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
    setSelectedCurrency(val); // Обновляем состояние при выборе новой валюты
  };

  // Функция для отображения названия валюты в скобках, если она выбрана
  const getOptionDisplay = (symbol, name) => {
    return selectedCurrency === symbol ? `(${symbol} ${name})` : `${symbol} ${name}`;
  };

  return (
    <div className="alert alert-carrency">
      Currency
      {
        <select name="Currency" id="Currency" onChange={(event) => changeCurrency(event.target.value)}>
          <option value="$">{getOptionDisplay("$", "Dollar")}</option>
          <option value="£">{getOptionDisplay("£", "Pound")}</option>
          <option value="€">{getOptionDisplay("€", "Euro")}</option>
          <option value="₹">{getOptionDisplay("₹", "Rupee")}</option>
        </select>
      }
    </div>
  );
};

export default Currency;
