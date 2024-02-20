import HistoryItem from "./HistoryItem";
import { FcMoneyTransfer } from "react-icons/fc";

const EmptyState = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <FcMoneyTransfer size={90} />
        <p className="text-center text-slate-500">
          There is no transaction history
        </p>
      </div>
    </>
  );
};

const History = ({ transactions, onDelete, onDeleteAll }) => {
  const handleDeleteAll = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all transactions?"
    );
    if (isConfirmed) {
      onDeleteAll();
    }
  };

  return (
    <div className="my-10 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <div className="font-semibold">History</div>
          {transactions.length > 0 && (
            <button
              className="font-light text-red-700"
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
          )}
        </div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>

      <div className="flex flex-col gap-3">
        {/* history details */}

        {transactions.length === 0 && <EmptyState />}
        {transactions.map((transaction) => {
          return <HistoryItem transaction={transaction} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};
export default History;
