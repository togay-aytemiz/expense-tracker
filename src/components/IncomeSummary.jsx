const IncomeSummary = () => {
  return (
    <div className=" bg-white rounded-lg shadow-lg p-6 my-6 flex flex-row items-center justify-evenly">
        <div className="flex flex-col justify-center items-center">
            <p className="uppercase">Income</p>
            <p className="text-lg font-semibold text-green-600">5000 TL</p>
        </div>

        <div className="w-[1px] bg-slate-400 h-12 mx-8">

        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="uppercase">Expense</p>
            <p className="text-lg font-semibold text-red-600">0.00 TL</p>
        </div>
    </div>
  )
}
export default IncomeSummary