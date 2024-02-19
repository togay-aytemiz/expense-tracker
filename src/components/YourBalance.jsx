const YourBalance = ({ transactions }) => {
  let balance = 0;
  const calculatedBalance = transactions.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div className="flex flex-col gap-0 justify-center items-start">
      <div className="uppercase">Your Balance</div>
      <div className="text-4xl font-semibold">{calculatedBalance} TL</div>
    </div>
  );
};
export default YourBalance;
