"use client";
import AccountForm from "@/components/account/AccountForm";
import NavBar from "@/components/NavBar";
import React from "react";

const AccountPage = () => {
  return (
    <NavBar>
      <div className="mx-auto flex flex-col max-w-[1300px]">
        <AccountForm></AccountForm>
      </div>
    </NavBar>
  );
};

export default AccountPage;
