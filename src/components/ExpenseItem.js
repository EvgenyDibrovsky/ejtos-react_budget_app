import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { BsFillPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext); // Получаем текущий символ валюты

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10, // здесь мы изменяем значение на -10
    };

    dispatch({
      type: "ADD_EXPENSE", // предполагается, что ваш reducer корректно обрабатывает отрицательные значения
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>

      <td>
        <button className="btn-table" onClick={(event) => increaseAllocation(props.name)}>
          <BsFillPlusCircleFill className="btn-add" size="1.5em" />
        </button>
      </td>
      <td>
        <button className="btn-table" onClick={(event) => decreaseAllocation(props.name)}>
          <BsDashCircleFill className="btn-minus" size="1.5em" />
        </button>
      </td>
      <td>
        <TiDelete className="btn-delete" size="2em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
