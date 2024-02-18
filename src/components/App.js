import AddNewTransaction from "./AddNewTransaction";
import Header from "./Header";
import History from "./History";
import IncomeSummary from "./IncomeSummary";
import YourBalance from "./YourBalance";

const App = () => {
  return (
    <div className="mt-10 max-w-md mx-auto">
      <div className="mx-4">
        <Header />
        <YourBalance />
        <IncomeSummary />
        <AddNewTransaction />
        <History />
      </div>
    </div>
  );
};
export default App;
