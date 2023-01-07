import React, { useState, useEffect, createContext } from "react";
export const contextdata = createContext();
const Pageone = ({ children }) => {
  const [data, setdata] = useState([]);

  const fetchdata = async () => {
    const responsedata = await fetch("https://fakestoreapi.com/products");
    const newdata = await responsedata.json();
    setdata(newdata);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(data, "data");
  return (
    <>
      <contextdata.Provider value={data}>{children}</contextdata.Provider>
    </>
  );
};

export default Pageone;
