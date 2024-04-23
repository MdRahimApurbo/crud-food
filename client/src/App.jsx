import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import EditFood from "./pages/EditFood";
import AllFood from "./pages/AllFood";

const App = () => {
  return (
    <div className="flex flex-row gap-5">
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/allfood" element={<AllFood/>}/>
                <Route path="/readfood" element={<EditFood/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
