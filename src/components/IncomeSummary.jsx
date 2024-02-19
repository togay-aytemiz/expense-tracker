const IncomeSummary = ({ transactions }) => {
  const filteredIncome = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const calculatedIncome = filteredIncome.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const filteredExpense = transactions.filter(
    (transaction) => transaction.type === "expense"
  );
  const calculatedExpense = filteredExpense.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div className=" bg-white rounded-lg shadow-lg p-6 my-6 flex flex-row items-center justify-evenly">
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase">Income</p>
        <p className="text-lg font-semibold text-green-600">
          {calculatedIncome > 0 ? calculatedIncome : "0.00"} TL
        </p>
      </div>

      <div className="w-[1px] bg-slate-400 h-12 mx-8"></div>
      <div className="flex flex-col justify-center items-center">
        <p className="uppercase">Expense</p>
        <p className="text-lg font-semibold text-red-600">
          {calculatedExpense < 0 ? calculatedExpense : "0.00"} TL
        </p>
      </div>
    </div>
  );
};
export default IncomeSummary;
