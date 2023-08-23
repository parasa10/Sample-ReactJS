import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [getTitle, setTitle] = useState("");
  const [getAmount, setAmount] = useState("");
  const [getDate, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitExpense = (event) => {
    event.preventDefault();

    const newExpense = {
      title: getTitle,
      amount: +getAmount,
      date: new Date(getDate),
    };

    props.onSaveExpense(newExpense);
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={getTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={getAmount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={getDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCanceled}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
