import React, { useEffect, useState } from "react";
import { CreateFood, UpdateFood } from "../ApiServices/CrudServices";
import { toast } from "react-toastify";
import Fromloader from "./../loaders/Fromloader";

const FoodCreateFrom = ({ getformData , id }) => {
  const [formObj, setFormObj] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (getformData) {
      setFormObj(getformData[0]);
      setLoading(false);

    }else{
      setLoading(false);
    }


  }, [getformData]);

  const inputOnChange = (e) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = formObj._id ? UpdateFood : CreateFood;
    const apiParams = formObj._id ? [formObj._id, formObj] : [formObj]; 
    apiCall(...apiParams) 
      .then((response) => {
        if (formObj._id) {
          setFormObj(response.data);
        } else {
          setFormObj({});
        }
        toast.success(
          `Food ${formObj._id ? "updated" : "created"} successfully`
        );
      })
      .catch((error) => {
        console.error(
          "Error",
          formObj._id ? "updating" : "creating",
          "food:",
          error
        );
        toast.error(`Failed to ${formObj._id ? "update" : "create"} food`);
      });
  };
  
  
  
  

  return (
    <div>
      { loading ? (
        <Fromloader />
      ) : (
        <form className="pt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="fname">Food Name</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="text"
                name="FoodName"
                id="fname"
                value={formObj.FoodName || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fcood">Food Code</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="text"
                name="FoodCode"
                id="fcood"
                value={formObj.FoodCode || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fimage">Food Image (URL)</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="text"
                name="FoodImage"
                id="fimage"
                value={formObj.FoodImage || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fcategory">Food Category</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="text"
                name="FoodCategory"
                id="fcategory"
                value={formObj.FoodCategory || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fquantity">QTY</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="text"
                name="QTY"
                id="fquantity"
                value={formObj.QTY || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fprice">Price</label>
              <input
                className="rounded-lg border border-gray-200 bg-white p-5"
                type="number"
                name="Price"
                id="fprice"
                value={formObj.Price || ""}
                onChange={(e) => inputOnChange(e)}
              />
            </div>
          </div>
          <button className="btn mt-10" type="submit">
            {formObj._id ? "Update" : "Create"}
          </button>
        </form>
      )}
    </div>
  );
};

export default FoodCreateFrom;
