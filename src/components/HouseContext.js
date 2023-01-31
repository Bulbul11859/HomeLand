import React, {
  useState,
  useEffect,
  createContextgh,
  createContext,
} from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property Type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    //remove duplicate
    const uniqueCountry = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountry);
  }, []);
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove duplicate
    const uniqueProperties = ["Location type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleSearch = () => {
    console.log(country, property);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    let minPrice = parseInt(price.split("-")[0]);
    let maxPrice = parseInt(price.split("-")[1]);

    const newHouses = housesData.filter((house) => {
      setLoading(true)

      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(()=>{
      return newHouses.length <1?setHouses([]):
      setHouses(newHouses),
      setLoading(false)
    },1000)
    
  };

  return (
    <HouseContext.Provider
      value={{
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
        loading,
        handleSearch,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
