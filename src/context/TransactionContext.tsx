import React, { createContext, useContext, useState } from "react";

interface ITransaction {
  id: number;
  type: string;
  amount: number;
  desc: string;
  date: string;
  time: string;
  color: string;
}

interface TransactionContextType {
  transactions: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined
);

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 100000,
      type: "+",
      date: "17 Agustus 2024",
      time: "13:10 WIB",
      desc: "Top Up Saldo",
      color: "text-green-500",
    },
    {
      id: 2,
      amount: 400000,
      type: "-",
      date: "17 Agustus 2024",
      time: "12:10 WIB",
      desc: "Pulsa Prabayar",
      color: "text-red-600",
    },
  ]);

  const addTransaction = (transaction: ITransaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context)
    throw new Error("useTransaction must be used within a TransactionProvider");
  return context;
};
