import React, { useState } from "react";

const FoodFromLayout = () => {
  const [formObj, setFormObj] = useState({
    FoodName: "",
    FoodCode: "",
    FoodImage: "",
    FoodCategory: "",
    QTY: "",
    Price: "",
  });

  const inputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const createFoodList = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };

  return (
    <div>
      <form className="pt-4" onSubmit={createFoodList}>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="fname">Food Name</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="text"
              name="FoodName"
              id="fname"
              value={formObj.FoodName}
              onChange={(e) => inputOnChange("FoodName", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fcood">Food Code</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="text"
              name="FoodCode"
              id="fcood"
              value={formObj.FoodCode}
              onChange={(e) => inputOnChange("FoodCode", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fimage">Food Image (URL)</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="text"
              name="FoodImage"
              id="fimage"
              value={formObj.FoodImage}
              onChange={(e) => inputOnChange("FoodImage", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fcategory">Food Category</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="text"
              name="FoodCategory"
              id="fcategory"
              value={formObj.FoodCategory}
              onChange={(e) => inputOnChange("FoodCategory", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fquantity">QTY</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="text"
              name="QTY"
              id="fquantity"
              value={formObj.QTY}
              onChange={(e) => inputOnChange("QTY", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="fprice">Price</label>
            <input
              className="rounded-lg border border-gray-200 bg-white p-5"
              type="number"
              name="Price"
              id="fprice"
              value={formObj.Price}
              onChange={(e) => inputOnChange("Price", e.target.value)}
            />
          </div>
        </div>
        <button className="btn mt-10" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoodFromLayout;
