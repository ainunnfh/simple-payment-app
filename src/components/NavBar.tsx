"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavBarProps {
  user?: string;
  children?: React.ReactNode;
}
const NavBar: React.FC<INavBarProps> = (props) => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `hover:cursor-pointer ${
      pathname === path ? "text-red-600 font-bold" : "hover:text-red-600"
    }`;
  return (
    <>
      <div className="flex justify-between items-center p-4 mx-auto shadow shadow-gray-200 ">
        <Link href="/">
          <div className="flex gap-2 items-center hover:text-red-600">
            <img className="w-5 h-5" src="assets/Logo.png" />
            <span className="font-bold">SIMS PPOB</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href="/top-up-page">
            <div className={linkClasses("/top-up-page")}>Top Up</div>
          </Link>
          <Link href="/transaction-page">
            <div className={linkClasses("/transaction-page")}>Transaction</div>
          </Link>
          <Link href="/account-page">
            <div className={linkClasses("/account-page")}>Akun</div>
          </Link>
        </div>
      </div>
      <div className="">{props.children}</div>
    </>
  );
};

export default NavBar;
