import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NewUser from "./option.js";

function Calendario() {
  const TimeStart = () => {
    return (
      <select name="timeStart" id="timeStart">
        <option value="12:00">12:00</option>
        <option value="12:30">12:30</option>
        <option value="1:00">1:00</option>
        <option value="1:30">1:30</option>
        <option value="2:00">2:00</option>
        <option value="2:30">2:30</option>
        <option value="3:00">3:00</option>
        <option value="3:30">3:30</option>
        <option value="4:00">4:00</option>
        <option value="4:30">4:30</option>
        <option value="5:00">5:00</option>
        <option value="5:30">5:30</option>
        <option value="6:00">6:00</option>
        <option value="6:30">6:30</option>
        <option value="7:00">7:00</option>
        <option value="7:30">7:30</option>
        <option value="8:00">8:00</option>
        <option value="8:30">8:30</option>
        <option value="9:00">9:00</option>
        <option value="9:30">9:30</option>
        <option value="10:00">10:00</option>
        <option value="10:30">10:30</option>
        <option value="11:00">11:00</option>
        <option value="11:30">11:30</option>
        <option value="12:00">12:00</option>
        <option value="12:30">12:30</option>
        <option value="13:00">13:00</option>
        <option value="13:30">13:30</option>
        <option value="14:00">14:00</option>
        <option value="14:30">14:30</option>
        <option value="15:00">15:00</option>
        <option value="15:30">15:30</option>
        <option value="16:00">16:00</option>
        <option value="16:30">16:30</option>
        <option value="17:00">17:00</option>
        <option value="17:30">17:30</option>
        <option value="18:00">18:00</option>
        <option value="18:30">18:30</option>
        <option value="19:00">19:00</option>
        <option value="19:30">19:30</option>
        <option value="20:00">20:00</option>
        <option value="20:30">20:30</option>
        <option value="21:00">21:00</option>
        <option value="21:30">21:30</option>
        <option value="22:00pm">22:00</option>
        <option value="22:30">22:30</option>
        <option value="23:00">23:00</option>
        <option value="23:30">23:30</option>
      </select>
    );
  };
  const TimeEnd = () => (
    <select name="timeEnd" id="timeEnd">
      <option value="12:00">12:00</option>
      <option value="12:30">12:30</option>
      <option value="1:00">1:00</option>
      <option value="1:30">1:30</option>
      <option value="2:00">2:00</option>
      <option value="2:30">2:30</option>
      <option value="3:00">3:00</option>
      <option value="3:30">3:30</option>
      <option value="4:00">4:00</option>
      <option value="4:30">4:30</option>
      <option value="5:00">5:00</option>
      <option value="5:30">5:30</option>
      <option value="6:00">6:00</option>
      <option value="6:30">6:30</option>
      <option value="7:00">7:00</option>
      <option value="7:30">7:30</option>
      <option value="8:00">8:00</option>
      <option value="8:30">8:30</option>
      <option value="9:00">9:00</option>
      <option value="9:30">9:30</option>
      <option value="10:00">10:00</option>
      <option value="10:30">10:30</option>
      <option value="11:00">11:00</option>
      <option value="11:30">11:30</option>
      <option value="12:00">12:00</option>
      <option value="12:30">12:30</option>
      <option value="13:00">13:00</option>
      <option value="13:30">13:30</option>
      <option value="14:00">14:00</option>
      <option value="14:30">14:30</option>
      <option value="15:00">15:00</option>
      <option value="15:30">15:30</option>
      <option value="16:00">16:00</option>
      <option value="16:30">16:30</option>
      <option value="17:00">17:00</option>
      <option value="17:30">17:30</option>
      <option value="18:00">18:00</option>
      <option value="18:30">18:30</option>
      <option value="19:00">19:00</option>
      <option value="19:30">19:30</option>
      <option value="20:00">20:00</option>
      <option value="20:30">20:30</option>
      <option value="21:00">21:00</option>
      <option value="21:30">21:30</option>
      <option value="22:00pm">22:00</option>
      <option value="22:30">22:30</option>
      <option value="23:00">23:00</option>
      <option value="23:30">23:30</option>
    </select>
  );
  const [value, onChange] = useState([new Date(), new Date()]);
  const [valueTime, onChangeTime] = useState("10:00");
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: "350px",
          margin: "auto",
        }}
      >
        <p style={{ color: "blue" }}>Book from Scratck</p>
        <button
          style={{
            backgroundColor: "lightblue",
            maxHeight: "30px",
            marginLeft: "auto",
          }}
        >
          Re-Book Staff
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <NewUser />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "350px",
            width: "90vw",
          }}
        >
          <div>
            <TimeStart />
          </div>
          <p style={{margin:"10px"}}>{"\uD83E\uDC22"}</p> 
          <div>
            <TimeEnd />
          </div>
        </div>
        <Calendar onChange={onChangeDay} selectRange />
        {/* <p>
          Dia start: {diaStart} - diaEnd: {diaEnd} total dias:{" "}
          {Math.round(estadia)}{" "}
        </p> */}
        <div>
          <button style={{marginTop:"50px",width:"90vw",maxWidth: "350px",backgroundColor:"#aaff",color:"white",height:"30px",borderRadius:"10px"}}>Create Booking</button>
        </div>
      </div>
    </div>
  );
}

export default Calendario;
