
const AddNewTransaction = () => {
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
                        <input type="number" name="" id="" placeholder="Enter amount..." className="font-light p-3 focus:outline-none rounded-lg shadow w-full"/>
                    </form>
                    <p className=" absolute right-4 top-1/4 text-slate-500 font-light">TL</p>
                </div>
            </div>


            {/* Text */}

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0">
                    <p className="text-sm font-semibold">Text</p>
                </div>

                <div className=" relative">
                    <form className="relative">
                        <input type="number" name="" id="" placeholder="Enter descriptive text..." className="font-light p-3 focus:outline-none rounded-lg shadow w-full"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AddNewTransaction