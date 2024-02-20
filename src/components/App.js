import { useEffect, useState } from "react";
import AddNewTransaction from "./AddNewTransaction";
import Header from "./Header";
import History from "./History";
import IncomeSummary from "./IncomeSummary";
import YourBalance from "./YourBalance";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const response = await axios.get("http://localhost:3001/transactions");
    console.log(response.data);
    let sortedData = response.data.sort(
      (a, b) => new Date(b.time) - new Date(a.time)
    );
    setTransactions(sortedData);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleCreate = async (text, amount, time) => {
    console.log(
      `Creating transaction with text: ${text}, amount: ${amount} and time: ${time}`
    );

    let type = amount >= 0 ? "income" : "expense";

    const response = await axios.post("http://127.0.0.1:3001/transactions", {
      text,
      amount,
      time,
      type,
    });
    console.log(response.data);

    const updatedTransaction = [...transactions, response.data].sort(
      (a, b) => new Date(b.time) - new Date(a.time)
    );

    console.log(updatedTransaction);
    setTransactions(updatedTransaction);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/transactions/${id}`);

    const updatedTransaction = transactions.filter((transaction) => {
      return transaction.id !== id;
    });
    setTransactions(updatedTransaction);
  };

  const handleDeleteAll = async () => {
    transactions.map(async (transaction) => {
      return await axios.delete(
        `http://127.0.0.1:3001/transactions/${transaction.id}`
      );
    });

    setTransactions([]);
  };

  return (
    <>
      <div className="mt-10 max-w-md mx-auto">
        <div className="mx-4">
          <Header />
          <YourBalance transactions={transactions} />
          <IncomeSummary transactions={transactions} />
          <AddNewTransaction onCreate={handleCreate} />
          <History
            transactions={transactions}
            onDelete={handleDelete}
            onDeleteAll={handleDeleteAll}
          />
        </div>
      </div>
    </>
  );
};
export default App;
