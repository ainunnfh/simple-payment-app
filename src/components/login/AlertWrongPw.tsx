import React from "react";

const AlertWrongPw = () => {
  return (
    <div className="flex gap-2 justify-between text-red-600 text-sm bg-red-50 p-1">
      <div>password yang anda masukkan salah</div>
      <button>x</button>
    </div>
  );
};

export default AlertWrongPw;
