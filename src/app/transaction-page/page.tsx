"use client";
import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import Saldo from "@/components/Saldo";
import TransactionHistory from "@/components/transaction/TransactionHistory";
import { useTransaction } from "@/context/TransactionContext";
import React from "react";

const TransactionPage = () => {
  const { transactions } = useTransaction();

  return (
    <NavBar>
      <div className="mx-auto flex flex-col max-w-[1300px]">
        <div className="flex justify-between p-4">
          <ProfileCard name="John Doe" />
          <Saldo />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h1 className="font-bold">Semua Transaksi</h1>

          {transactions.length === 0 ? (
            <p className="text-gray-500">Belum ada transaksi</p>
          ) : (
            transactions.map((trx) => (
              <TransactionHistory
                key={trx.id}
                color={trx.color}
                amount={trx.amount}
                type={trx.type}
                date={trx.date}
                time={trx.time}
                desc={trx.desc}
              />
            ))
          )}
        </div>
        <button className="text-red-600">Show more</button>
      </div>
    </NavBar>
  );
};

export default TransactionPage;
