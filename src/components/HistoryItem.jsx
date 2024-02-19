import moment from "moment";

const HistoryItem = ({ transaction }) => {
  const { type, text, amount, time, id } = transaction;
  const borderColor = type === "income" ? false : true;

  return (
    <div
      className={`flex flex-row items-center justify-between p-3 shadow bg-white border-r-8 ${
        borderColor ? "border-red-500" : "border-green-500"
      }`}
    >
      <div>
        <p className=" text-left text-sm">{text}</p>
        <p className="text-left text-sm text-gray-500">
          {moment(time).format("dddd, DD.MM.YYYY")}
        </p>
      </div>
      <p className=" text-right text-md font-semibold">{amount} TL</p>
    </div>
  );
};
export default HistoryItem;
