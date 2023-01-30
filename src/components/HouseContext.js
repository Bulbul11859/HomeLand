import React, {
  useState,
  useEffect,
  createContextgh,
  createContext,
} from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses,setHouses]=useState(housesData)
  const[country,setCountry]=useState('Location (any)')
  const [countries,setCountries]=useState([])
  const [property,setProperty]=useState('Property Type (any)')
  const [properties,setProperties]=useState([])
  const [price,setPrice]=useState('Price range (any)')
  const [loading,setLoading]=useState(false)

useEffect(()=>{
  const allCountries=houses.map(house=>{
     return house.country
  })
 
  //remove duplicate 
  const uniqueCountry=['Location (any)',...new Set(allCountries)]
  setCountries(uniqueCountry);
},[])
useEffect(()=>{
  const allProperties=houses.map(house=>{
     return house.type
  })
 
  //remove duplicate 
  const uniqueProperties=['Location type (any)',...new Set(allProperties)]
  setProperties(uniqueProperties);
},[])



  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading

    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
