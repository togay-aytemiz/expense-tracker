import moment from "moment";
import { MdDeleteOutline } from "react-icons/md";

const HistoryItem = ({ transaction, onDelete }) => {
  const { type, text, amount, time, id } = transaction;
  const borderColor = type === "income" ? false : true;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <button onClick={handleClick}>
        <MdDeleteOutline className=" text-red-500" size={20} />
      </button>
      <div
        className={`flex flex-row items-center w-full justify-between p-3 shadow bg-white border-r-8 ${
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
    </div>
  );
};
export default HistoryItem;
