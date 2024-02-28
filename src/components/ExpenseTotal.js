// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// const ExpenseTotal = () => {
//   const { expenses } = useContext(AppContext);
//   const totalExpenses = expenses.reduce((total, item) => {
//     return (total += item.cost);
//   }, 0);
//   return (
//     <div className="alert alert-primary">
//       <span>Spent so far: £{totalExpenses}</span>
//     </div>
//   );
// };
// export default ExpenseTotal;
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext); // Получаем текущий символ валюты
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  return (
    <div className="alert alert-primary">
      {/* Используем переменную currency для отображения символа валюты */}
      <span>
        Spent so far: {currency}
        {totalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;
