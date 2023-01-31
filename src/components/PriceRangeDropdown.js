import React, { useContext, useState } from "react";
import { RiWallet3Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
const PriceRangeDropdown = () => {
  const { price, setPrice, properties } = useContext(HouseContext);
 const prices=[
  {
    value:'Price range (any)'
  },
  {
    value:'100000-130000'
  },
  {
    value:'130000-160000'
  },
  {
    value:'160000-190000'
  },
  {
    value:'190000-220000'
  },
  {
    value:'100000-300000'
  },
  {
    value:'300000-400000'
  }

 ]
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium loading-tight">
            {price}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((item, index) => (
          <Menu.Item
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
           onClick={()=>{setPrice(item.value);setIsOpen(!isOpen)}}
          >
            {item.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
