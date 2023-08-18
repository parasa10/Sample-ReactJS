import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseHandler = (values) => {
    const newExpenses = {
      ...values,
      id: Math.random().toString(),
    };
    console.log("New Expense.js");
    console.log(newExpenses);

    props.onAddExpense(newExpenses);
  };
  return (
    <div className="new-expense">
      <ExpensesFilter />
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
