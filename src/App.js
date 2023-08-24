import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "차사기",
      amount: "2000만원",
      date: new Date(2023, 2, 28),
    },
    {
      id: 2,
      title: "커피사기",
      amount: "2000원",
      date: new Date(2023, 5, 28),
    },
    {
      id: 3,
      title: "점심먹기",
      amount: "20000원",
      date: new Date(2023, 1, 18),
    },
    {
      id: 4,
      title: "과자먹기",
      amount: "4500원",
      date: new Date(2023, 7, 15),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} id={expenses[0].id} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} id={expenses[1].id} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} id={expenses[2].id} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} id={expenses[3].id} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
