import React, { useState } from "react";
import { useEffect } from "react";

const NewUser = () => {
  const [res, setResp] = useState([]);


const fetchData = ()=>{
  fetch("https://static.healthforcego.com/grades.json")
  .then((data) => {
    return data.json();
  })
  //  console.log(item)
  .then((item) => {
    item.grades.map((dato) => {
      setResp((res) => [...res, dato]);
    });
  })
}
useEffect(() => {
    fetchData()
    
  return setResp([])
  }, []);
  
  console.log(res);
  return (
    res.map((item) => {
    return <option key={item}>{item.split(" ")[0]}</option>;
  })
  )
};

export default NewUser;
