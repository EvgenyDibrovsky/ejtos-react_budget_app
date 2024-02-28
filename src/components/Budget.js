// import React, { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const Budget = () => {
//   const { budget } = useContext(AppContext);
//   const [newBudget, setNewBudget] = useState(budget);
//   const handleBudgetChange = (event) => {
//     setNewBudget(event.target.value);
//   };
//   return (
//     <div className="alert alert-secondary">
//       <span>Budget: £ </span>
//       {/* <span>Budget: £{budget}</span> */}
//       <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
//     </div>
//   );
// };
// export default Budget;
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency } = useContext(AppContext); // Предположим, что currency хранит текущий символ валюты
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      {/* Используем переменную currency для отображения символа валюты */}
      <span>Budget: {currency} </span>
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
  );
};

export default Budget;
