import React from "react";

interface ITopUpNominalProps {
  nominal: number;
  type: string;
  onConfirm: (nominal: number) => void;
  onClose: () => void;
}
const TopUpConfirmation: React.FC<ITopUpNominalProps> = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-4 rounded-md bg-white">
      <img src="assets/logo.png" alt="" className="w-10 h-10" />
      <div className="mt-5">
        Anda yakin untuk {props.type === "+" ? "Top Up" : "Bayar"} sebesar
      </div>
      <div className="font-bold text-2xl">
        Rp. {props.nominal.toLocaleString("id-ID")}
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <button
          className="text-red-600"
          onClick={() => props.onConfirm(props.nominal)}
        >
          Ya, lanjutkan {props.type === "+" ? "Top Up" : "Bayar"}
        </button>
        <button className="text-slate-400" onClick={props.onClose}>
          Batalkan
        </button>
      </div>
    </div>
  );
};

export default TopUpConfirmation;
