import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import Saldo from "@/components/Saldo";
import TransactionHistory from "@/components/transaction/TransactionHistory";
import React from "react";

const TransactionPage = () => {
  return (
    <NavBar>
      <div className="mx-auto flex flex-col max-w-[1300px]">
        <div className="flex justify-between p-4">
          <ProfileCard name="Kristanto Wibowo" />
          <Saldo />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h1 className="font-bold">Semua Transaksi</h1>
          <TransactionHistory
            color="green-500"
            amount={100000}
            type={"+"}
            date={"17 Agustus 2024"}
            time={"13:10 WIB"}
            desc={"Top Up Saldo"}
          />
          <TransactionHistory
            color="red-600"
            amount={400000}
            type={"-"}
            date={"17 Agustus 2024"}
            time={"12:10 WIB"}
            desc={"Pulsa Prabayar"}
          />
          <TransactionHistory
            color="red-600"
            amount={100000}
            type={"-"}
            date={"17 Agustus 2024"}
            time={"11:10 WIB"}
            desc={"Listrik Pascabayar"}
          />
          <TransactionHistory
            color="green-500"
            amount={500000}
            type={"+"}
            date={"17 Agustus 2024"}
            time={"10:10 WIB"}
            desc={"Top Up Saldo"}
          />
          <TransactionHistory
            color="green-500"
            amount={500000}
            type={"+"}
            date={"17 Agustus 2024"}
            time={"10:10 WIB"}
            desc={"Top Up Saldo"}
          />
        </div>
        <button className="text-red-600">Show more</button>
      </div>
    </NavBar>
  );
};

export default TransactionPage;
