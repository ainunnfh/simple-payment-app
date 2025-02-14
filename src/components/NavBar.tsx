import React from "react";

interface INavBarProps {
  user?: string;
  children?: React.ReactNode;
}
const NavBar: React.FC<INavBarProps> = (props) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 shadow shadow-gray-200 ">
        <div className="flex gap-2 items-center">
          <img className="w-5 h-5" src="assets/Logo.png" />
          <span className="font-bold">SIMS PPOB</span>
        </div>
        <div className="flex gap-4">
          <div>Top Up</div>
          <div>Transaction</div>
          <div>Akun</div>
        </div>
      </div>
      <div className="">{props.children}</div>
    </>
  );
};

export default NavBar;
