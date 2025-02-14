import React from "react";
interface INotoficationProps {
  icon: string;
  message: string;
  nominal: number;
  type: string;
}
const Notification: React.FC<INotoficationProps> = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center p-4 rounded-md bg-white">
      <div>
        <img src={props.icon} alt="" />
      </div>
      <div className="flex flex-col items-center mt-5">
        {props.message}
        <span className="font-bold text-2xl">
          Rp. {props.nominal.toLocaleString("id-ID")}
        </span>{" "}
        {props.type}
      </div>

      <button className="text-red-500 mt-4 font-bold">
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default Notification;
