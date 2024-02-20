import { useState } from "react";

const AddNewTransaction = ({ onCreate }) => {
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");

  const handleClick = () => {
    if (amount && text) {
      const timestamp = new Date().toISOString();
      onCreate(text, parseFloat(amount), timestamp);
      setAmount("");
      setText("");
    }
  };

  return (
    <div className="my-10 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="font-semibold">Add New Transaction</div>
        <div className="w-full h-[1px] bg-slate-400"></div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Amount */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold">Amount</p>
            <p className="text-sm">Positive: Income | Negative: Expense</p>
          </div>

          <div className=" relative">
            <form className="relative">
              <input
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                value={amount}
                className="font-light p-3 focus:outline-none rounded-lg shadow w-full"
              />
            </form>
            <p className=" absolute right-4 top-1/4 text-slate-500 font-light">
              TL
            </p>
          </div>
        </div>

        {/* Text */}

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold">Text</p>
          </div>

          <div className=" relative">
            <form className="relative">
              <input
                type="text"
                name="text"
                placeholder="Enter descriptive text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="font-light p-3 focus:outline-none rounded-lg shadow w-full"
              />
            </form>
          </div>
        </div>

        {/* Button */}
        {/* {amount && text && (
          <button
            onClick={handleClick}
            className="p-3 w-full rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-900 hover:shadow-2xl transition ease-out"
          >
            Add Transaction
          </button>
        )} */}

        <button
          onClick={handleClick}
          className="p-3 w-full rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-900 hover:shadow-2xl transition ease-out"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
};
export default AddNewTransaction;
