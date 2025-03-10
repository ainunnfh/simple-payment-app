"use client";
import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import Saldo from "@/components/Saldo";
// import TopUpConfirmation from "@/components/topup/TopUpConfirmation";
import TopUpForm from "@/components/topup/TopUpForm";

// import Notification from "@/components/Notification";
import React from "react";

const TopUpPage = () => {
  return (
    <NavBar>
      <div className="mx-auto flex flex-col max-w-[1300px]">
        <div className="flex justify-between p-4">
          <ProfileCard name="Kristanto Wibowo" />
          <Saldo />
        </div>
        <TopUpForm />
      </div>
      {/* <Notification
        nominal={10000}
        message="Pembayaran listrik prabayar sebesar"
        type="berhasil"
        icon="assets/icon-check.png"
      /> */}
      {/* <Notification
        nominal={10000}
        message="Top Up sebesar"
        type="gagal"
        icon="assets/icon-x.png"
      /> */}
      {/* <TopUpConfirmation nominal={10000} /> */}
    </NavBar>
  );
};

export default TopUpPage;
