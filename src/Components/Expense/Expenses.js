import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [getFilterOption, setFilterOption] = useState(2021);

  const optionChangeHandler = (selected) => {
    setFilterOption(selected);
  };

  let filteredExpense = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === getFilterOption.toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelected={getFilterOption}
        onChangeOption={optionChangeHandler}
      />
      <ExpensesList item={filteredExpense} />
    </Card>
  );
}

export default Expenses;
