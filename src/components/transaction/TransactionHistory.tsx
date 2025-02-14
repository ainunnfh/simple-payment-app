import React from "react";

interface ITransactionHistoryProps {
  amount: number;
  type: string;
  date: string;
  time: string;
  desc: string;
  color: string;
}

const TransactionHistory: React.FC<ITransactionHistoryProps> = (props) => {
  return (
    <div className="flex flex-col p-2 border-gray-200 border-2 rounded-md">
      <div className="flex justify-between">
        <div className={`font-bold text-${props.color}`}>
          {props.type} Rp. {props.amount}
        </div>
        <div className="text-xs">{props.desc}</div>
      </div>
      <div className="flex gap-2 text-xs text-gray-300">
        <div>{props.date}</div>
        <div>{props.time}</div>
      </div>
    </div>
  );
};

export default TransactionHistory;
