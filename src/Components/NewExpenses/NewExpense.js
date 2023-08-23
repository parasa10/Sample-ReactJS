import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (values) => {
    const newExpenses = {
      ...values,
      id: Math.random().toString(),
    };
    // console.log("New Expense.js");
    // console.log(newExpenses);

    props.onAddExpense(newExpenses);
    setCancelled(false);
  };

  const [getCancelled, setCancelled] = useState(false);

  const onNewExpense = () => {
    setCancelled(true);
  };

  const onCancelHandler = () => {
    setCancelled(false);
  };

  return (
    <div className="new-expense">
      {!getCancelled && <button onClick={onNewExpense}>Add New Expense</button>}
      {getCancelled && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCanceled={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
