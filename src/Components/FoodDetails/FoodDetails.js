import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClickFood from "../ClickFood/ClickFood";

const FoodDetails = () => {
  const { id } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/allfoods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const match = foods.find((food) => food?.id == id);

  return (
    <div className="h-screen max-w-[1124px] font-poppins mx-auto  bg-gray-100">
      <div className=" flex justify-center items-center  my-10 px-10">
        <div className="w-5/12 mx-auto ">
          <h1 className="text-3xl mb-4 text-gray-700 font-semibold font-mono">
            {match?.name}
          </h1>
          <p className="text-normal text-gray-600 mt-2">
            The European languages are members of the same family. Their
            separate existence is a myth. For science, music, sport, etc, Europe
            uses the same vocabulary.
          </p>
          <div className="flex items-center space-x-10 mt-8 text-gray-700">
            <p className="text-3xl font-semibold ">${match?.price}</p>
            <div className="flex bg-gray-200 rounded-full space-x-4 py-2 px-4">
              <p>
                {" "}
                <MinusIcon className="w-6"></MinusIcon>{" "}
              </p>
              <p>1</p>
              <p>
                {" "}
                <PlusIcon className="w-6 text-rose-600"></PlusIcon>{" "}
              </p>
            </div>
          </div>
          <button
            className="bg-rose-700 text-white py-2 px-6 rounded-full  hover:bg-rose-700 duration-300 mt-5 ease-in-out flex items-center"
          >
          <ShoppingCartIcon className="w-5 mr-3"></ShoppingCartIcon> Add  
          </button>
        </div>
        <div className="w-7/12 mx-auto">
          <img className="w-[500px] block ml-auto" src={match?.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
