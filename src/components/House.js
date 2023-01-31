import React from "react";
import { BiBed, BiArea, BiBath } from "react-icons/bi";

const House = ({ house }) => {
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl">
      <img src={house.image} className="mb-8" />
      <div className="flex mb-4 gap-x-2 ">
        <div className="bg-green-500 text-sm rounded-full text-white px-3">
          {house.type}
        </div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {house.country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{house.address}</div>
      <div className="flex items-center gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1" >
          <div className="text-[20px]">
            <BiBed/>
          </div>
          <div>{house.bedrooms}</div>
        </div>


        <div className="flex items-center text-gray-600 gap-1" >
          <div className="text-[20px]">
            <BiBath/>
          </div>
          <div>{house.bathrooms}</div>
        </div>

        <div className="flex items-center text-gray-600 gap-1" >
          <div className="text-[20px]">
            <BiArea/>
          </div>
          <div>{house.surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold mb-4 text-violet-600">{house.price}</div>
    </div>
  );
};

export default House;
