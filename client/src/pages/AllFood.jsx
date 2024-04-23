import React, { useState, useEffect } from "react";
import MasterLayout from "../components/MasterLayout";
import { Link } from "react-router-dom";
import { ReadFoodAll, DeleteFood } from "../ApiServices/CrudServices";
import { toast } from "react-toastify";
import Fromloader from './../loaders/Fromloader';

const AllFood = () => {
  const [foodList, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    ReadFoodAll()
      .then((data) => {
        setFoodList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food list:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (foodId) => {
    setLoading(true);
    DeleteFood(foodId)
      .then(() => {
        ReadFoodAll()
          .then((data) => {
            setFoodList(data);
            setLoading(false);
            toast.success("Food deleted successfully");
          })
          .catch((error) => {
            console.error("Error refreshing food list:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.error("Error deleting food:", error);
        setLoading(false);
      });
  };

  return (
    <MasterLayout>
      <div>
        <h2 className="font-medium text-lg">All Food List</h2>
        {loading ? <Fromloader/> : (
          // Food list
          <div className="grid grid-cols-4 gap-10 pt-[50px]">
            {foodList.data?.map((food, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-lg border border-solid border-gray-200 bg-white relative"
              >
                <div>
                  <img
                    className="boximg"
                    src={food.FoodImage}
                    alt={food.FoodName}
                  />
                </div>
                <div className="p-5">
                  <h2 className="boxtitle">{food.FoodName}</h2>
                  <div className="pt-5 flex flex-wrap gap-5">
                    <Link to={`/editfood/${food._id}`} className="editbtn">
                      Edit
                    </Link>
                    <button
                      className="deletebtn"
                      onClick={() => handleDelete(food._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <span className="tipprice">Tk: {food.Price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </MasterLayout>
  );
};

export default AllFood;
