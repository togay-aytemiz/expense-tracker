import HistoryItem from "./HistoryItem";

const History = ({ transactions }) => {
  return (
    <div className="my-10 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="font-semibold">History</div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>

      <div className="flex flex-col gap-3">
        {/* history details */}

        {transactions.length === 0 && <p>There is no transaction history</p>}
        {transactions.map((transaction) => {
          return <HistoryItem transaction={transaction} />;
        })}
      </div>
    </div>
  );
};
export default History;
