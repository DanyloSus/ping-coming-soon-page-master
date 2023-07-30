import React from "react";
import Top from "./Elements/Top";
import Bottom from "./Elements/Bottom";

const App = () => {
  return (
    <main className="flex flex-col items-center text-center ">
      <img
        src="./logo.svg"
        alt="logo"
        className="w-[100px] mb-14 md:mb-12 md:w-[50px]"
      />
      <Top />
      <img
        src="./illustration-dashboard.png"
        alt="illustration dashboard"
        className="w-[700px] mt-20 md:mt-16"
      />
      <Bottom />
    </main>
  );
};

export default App;
