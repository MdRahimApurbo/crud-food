import React from "react";
import Navbar from "./Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const MasterLayout = (props) => {
  return (
    <div className="flex flex-row font-poppin  w-full">
      <ToastContainer />
      <div className="bg-[#F1F2F7] w-[60px] sm:w-[200px] lg:w-[200px] xl:w-[300px] h-screen">
        <Navbar />
      </div>
      <div className="w-[300px] flex-grow">
        <div className="p-8 border-b border-[#C8CBD9]"></div>
        <div className="px-5 py-10">{props.children}</div>
      </div>
    </div>
  );
};

export default MasterLayout;
