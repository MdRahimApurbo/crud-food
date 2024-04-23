import React from "react";
import MasterLayout from "../components/MasterLayout";
import FoodCreateFrom from "../components/FoodCreateFrom";


const HomePage = () => {
  
  return (
    <MasterLayout>

      <div>
        <h2 className="font-medium text-lg">Create Food Item</h2>
        <div>
          <FoodCreateFrom/>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HomePage;
