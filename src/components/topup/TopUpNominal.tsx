import React from "react";

interface ITopUpNominalProps {
  nominal: number;
}
const TopUpNominal: React.FC<ITopUpNominalProps> = (props) => {
  return (
    <div className="border-gray-200 border-2 rounded-md py-2 px-4 flex items-center justify-center w-[30%] min-w-[100px]">
      Rp. {props.nominal.toLocaleString("id-ID")}
    </div>
  );
};

export default TopUpNominal;
