import { useState } from "react";
import AddNewTransaction from "./AddNewTransaction";
import Header from "./Header";
import History from "./History";
import IncomeSummary from "./IncomeSummary";
import YourBalance from "./YourBalance";

const mockData = [
  {
    id: 1,
    text: "Grocery shopping",
    amount: -50.25,
    time: "2024-02-19T08:30:00",
    type: "expense",
  },
  {
    id: 2,
    text: "Salary",
    amount: 2000.0,
    time: "2024-02-15T12:00:00",
    type: "income",
  },
  {
    id: 3,
    text: "Gas bill",
    amount: -30.0,
    time: "2024-02-10T10:45:00",
    type: "expense",
  },
  {
    id: 4,
    text: "Freelance work",
    amount: 500.0,
    time: "2024-02-05T16:20:00",
    type: "income",
  },
  {
    id: 5,
    text: "Dinner with friends",
    amount: -80.0,
    time: "2024-02-02T19:00:00",
    type: "expense",
  },
];

const App = () => {
  const [transactions, setTransactions] = useState(mockData);

  const handleCreate = (text, amount, time) => {
    console.log(
      `Creating transaction with text: ${text}, amount: ${amount} and time: ${time}`
    );

    const updatedTransaction = [
      ...transactions,
      {
        id: crypto.randomUUID(),
        text,
        amount,
        time,
        type: amount >= 0 ? "income" : "expense",
      },
    ].sort((a, b) => new Date(b.time) - new Date(a.time));

    console.log(updatedTransaction);
    setTransactions(updatedTransaction);
  };

  return (
    <>
      <div className="mt-10 max-w-md mx-auto">
        <div className="mx-4">
          <Header />
          <YourBalance transactions={transactions} />
          <IncomeSummary transactions={transactions} />
          <AddNewTransaction onCreate={handleCreate} />
          <History transactions={transactions} />
        </div>
      </div>
    </>
  );
};
export default App;
