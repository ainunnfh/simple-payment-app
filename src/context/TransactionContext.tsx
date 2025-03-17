import React, { createContext, useContext, useState } from "react";

interface ITransaction {
  type: string;
  amount: number;
  desc: string;
  date: string;
  time: string;
  color?: string;
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
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

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
