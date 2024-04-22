import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex flex-row gap-5">
      <div className="bg-[#F1F2F7] p-5 w-[300px] h-screen">
        <Navbar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default App;
