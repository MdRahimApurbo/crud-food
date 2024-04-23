import React from "react";
import Navbar from "./Navbar";

const MasterLayout = (props) => {
  return (
    <div className="flex flex-row font-poppin  w-full">
      <div className="bg-[#F1F2F7] w-[300px] h-screen">
        <Navbar />
      </div>
      <div className=" flex-grow">
        <div className="p-8 border-b-2 border-[#C8CBD9]"></div>
        <div className="px-5 py-10">{props.children}</div>
      </div>
    </div>
  );
};

export default MasterLayout;
