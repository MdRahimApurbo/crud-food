import React, { useEffect, useState } from "react";
import MasterLayout from "../components/MasterLayout";
import FoodCreateFrom from "../components/FoodCreateFrom";
import { ReadFood } from "../ApiServices/CrudServices";
import { useParams } from "react-router-dom";
import Fromloader from './../loaders/Fromloader';

const EditFood = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null);

  useEffect(() => {

  

    (async () => {
      
      await ReadFood(id)
        .then((data) => {
          setFormData(data);
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching food item:", error);
        });
    })();
  }, [id]);

  return (
    <MasterLayout>
      <div>
        <h2 className="font-medium text-lg text-[#1F384C]">Edit Food Item</h2>
        <div>
          {loading ? (
            <Fromloader />
          ) : (
            <FoodCreateFrom getformData={formData?.data} />
          )}
        </div>
      </div>
    </MasterLayout>
  );
};

export default EditFood;
