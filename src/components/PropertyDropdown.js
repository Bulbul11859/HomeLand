import React, { useContext, useState } from "react";
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";
import { motion } from "framer-motion";
const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <motion.div  whileTap={{ scale: 0.95 }}
       transition={{ duration: 0.2 }}
      >
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium loading-tight">
            {property}
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
        {properties.map((item, index) => (
          <Menu.Item
            className="cursor-pointer hover:text-violet-700 transition"
            as="li"
            key={index}
            onClick={() => {
              setProperty(item); setIsOpen(!isOpen);
            }}
          >
            {item}
          </Menu.Item>
        ))}
      </Menu.Items>
      </motion.div>
    </Menu>
  );
};

export default PropertyDropdown;
