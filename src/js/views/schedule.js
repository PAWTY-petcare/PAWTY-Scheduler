import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import "../../styles/register.css"



export const Schedule = () => {
    const { store, actions } = useContext(Context);

  return(
  
  <div>
    <div className="container">
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ebe2e2&ctz=America%2FNew_York&showCalendars=0&showTabs=0&showPrint=0&title=Bambi%20Lee%20Cleaning%20%26%20Home%20Care%20Booking%20Availability&src=MzRhZGJjNDViNjZhNzJkNDA5NzE2NjEzMzJjNDdmMTllNWY2YjBmOGU2NWEzYjJkZDllZGY5OGIwMzNhNDYzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5&color=%230B8043"></iframe>
    </div>
  </div>


  


  

  );
};