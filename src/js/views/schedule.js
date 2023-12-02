import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/schedule.css"



export const Schedule = () => {
    const { store, actions } = useContext(Context);

  return(
  
  <div>
    <div className="container">
    <iframe className="calendar" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0KWtcJG0M_4s6L9L6FsOu_gpedX52q9LQl446y_1p0wjJePOPRMcPmaYEet6X7btQ7k9SJVZPk?gv=true"></iframe>
    </div>
  </div>


  


  

  );
};