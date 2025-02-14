import React from "react";

const Saldo = () => {
  return (
    <div className="relative">
      <img
        className="object-cover rounded-lg w-full"
        src="assets/background-saldo.png"
        alt="background-saldo"
      />

      <div className="absolute inset-0 flex flex-col justify-center  p-4 text-white gap-2">
        <div>Saldo anda</div>
        <div className="font-bold text-3xl">Rp. 2.000.000</div>
        <div className="">Lihat Saldo</div>
      </div>
    </div>
  );
};

export default Saldo;
