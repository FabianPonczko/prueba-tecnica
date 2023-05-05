import React, { useState, useEffect } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Calendar from "react-calendar";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

function Calendario() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [diaStart, setDiaStart] = useState(0);
  const [diaEnd, setDiaEnd] = useState(0);
  const [estadia, setEstadia] = useState(0);

  useEffect(() => {
    setDiaStart(value[0].getTime());
    setDiaEnd(value[1].getTime());
    setEstadia((diaEnd - diaStart + 1) / 1000 / 60 / 60 / 24);
  }, [value, diaEnd]);

  function onChangeDay(valor) {
    onChange(valor);
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly",alignItems:"center" }}>
        <p style={{color:"blue"}}>Book from Scratck</p>
        <button style={{backgroundColor:"lightblue",maxHeight:"30px"}}>Re-Book Staff</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
        }}
      >
        <input type="select"></input>
        <Calendar onChange={onChangeDay} selectRange />
        <p>
          Dia start: {diaStart} - diaEnd: {diaEnd} total dias: {estadia}{" "}
        </p>
      </div>
    </div>
  );
}

export default Calendario;
