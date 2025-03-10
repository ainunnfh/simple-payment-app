"use client";
import Feature from "@/components/homepage/Feature";
import Promo from "@/components/homepage/Promo";
import NavBar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";
import Saldo from "@/components/Saldo";

// import Image from "next/image";
export default function Home() {
  return (
    <NavBar>
      <div className="mx-auto flex flex-col max-w-[1300px]">
        <div className="flex justify-between p-4">
          <ProfileCard name="Kristanto Wibowo" />
          <Saldo />
        </div>
        <Feature />
        <Promo />
      </div>
    </NavBar>
  );
}
