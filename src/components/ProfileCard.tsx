import React from "react";

interface IProfileCardProps {
  name: string;
  photo?: string;
}
const ProfileCard: React.FC<IProfileCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-3 p-6">
      <div>
        <img src="assets/profile-photo.png" alt="name" />
      </div>

      <div className="flex flex-col">
        Selamat datang,
        <span className="font-bold text-2xl">{props.name}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
