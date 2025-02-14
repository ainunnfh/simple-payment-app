import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import Saldo from "@/components/Saldo";
import TopUpForm from "@/components/topup/TopUpForm";
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
    </NavBar>
  );
};

export default TopUpPage;
