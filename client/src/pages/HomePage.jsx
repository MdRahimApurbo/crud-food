import React from "react";
import MasterLayout from "../components/MasterLayout";
import FoodFromLayout from "../components/FoodFromLayout";

const HomePage = () => {
  return (
    <MasterLayout>
      <div>
        <h2 className="font-medium text-lg">Create Food Item</h2>
        <div>
          <FoodFromLayout/>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HomePage;
