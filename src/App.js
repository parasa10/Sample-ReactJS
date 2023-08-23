import { useState } from "react";

import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// This is app's entry point

function App() {
  const [getExpenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (addedExpense) => {
    // console.log("App.js");
    // console.log(addedExpense);
    setExpenses((prevExpenses) => {
      return [addedExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={getExpenses} />
    </div>
  );
}

export default App;
