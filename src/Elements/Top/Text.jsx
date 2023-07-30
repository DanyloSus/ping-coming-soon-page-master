import React from "react";

const Text = () => {
  return (
    <div className="text-gray font-light text-[54px] md:text-2xl">
      <h1>
        We are launching{" "}
        <span className="font-bold text-very-dark-blue">soon!</span>
      </h1>
      <p className="text-xl md:text-xs mt-5 font-semibold">
        Subscribe and get notified
      </p>
    </div>
  );
};

export default Text;
