import { useState, useEffect } from "react";

const NewUser = () => {
  const [res, setResp] = useState([]);

  useEffect(() => {
    fetchData();
    return setResp([]);
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://static.healthforcego.com/grades.json");
    const dataJson = await data.json();
    setResp(dataJson.grades.map((dato) => dato));
  };
  // console.log("res ", res);
  return (
    <select style={{maxWidth:"350px",width:"90vw",backgroundColor:"white", marginBottom:"10px"}}>
      {res.map((item) => {
        return <option key={item}>{item.split(" ")[0]}</option>;
      })}
    </select>
  );
};

export default NewUser;
