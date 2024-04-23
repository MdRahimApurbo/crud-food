import React, { useEffect, useState } from "react";
import MasterLayout from "../components/MasterLayout";
import FoodCreateFrom from "../components/FoodCreateFrom";
import { ReadFood } from "../ApiServices/CrudServices";
import { useParams } from "react-router-dom";

const EditFood = () => {
  const { id } = useParams(); // Get the food ID from URL params
  
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    ReadFood(id)
      .then((data) => {
        setFormData(data); 
      })
      .catch((error) => {
        console.error("Error fetching food item:", error);
      });
  }, [id]); 

  return (
    <MasterLayout>
      <div>
        <h2 className="font-medium text-lg">Edit Food Item</h2>
        <div>
          <FoodCreateFrom getformData={formData?.data} />
        </div>
      </div>
    </MasterLayout>
  );
};

export default EditFood;
