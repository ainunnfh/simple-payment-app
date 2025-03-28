import React from "react";

const Promo = () => {
  return (
    <div className="flex flex-col p-6 w-full justify-between">
      <div>Temukan promo menarik</div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            src={`assets/banner-${num}.png`}
            alt={`banner ${num}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Promo;
