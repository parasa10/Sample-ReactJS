import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(prompt) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={prompt.expenses[0].title}
        amount={prompt.expenses[0].amount}
        date={prompt.expenses[0].date}
      />
      <ExpenseItem
        title={prompt.expenses[1].title}
        amount={prompt.expenses[1].amount}
        date={prompt.expenses[1].date}
      />
      <ExpenseItem
        title={prompt.expenses[2].title}
        amount={prompt.expenses[2].amount}
        date={prompt.expenses[2].date}
      />
      <ExpenseItem
        title={prompt.expenses[3].title}
        amount={prompt.expenses[3].amount}
        date={prompt.expenses[3].date}
      />
    </Card>
  );
}

export default Expenses;
