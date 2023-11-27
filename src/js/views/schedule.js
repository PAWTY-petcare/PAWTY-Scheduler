import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
// import "../../styles/register.css"



export const Schedule = () => {
    const { store, actions } = useContext(Context);

  return(
  
  <div>
    <div className="container">
     <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=YmFtYmlsZWVjaGNAZ21haWwuY29t&src=MzRhZGJjNDViNjZhNzJkNDA5NzE2NjEzMzJjNDdmMTllNWY2YjBmOGU2NWEzYjJkZDllZGY5OGIwMzNhNDYzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%2333B679&color=%230B8043"></iframe>
    </div>
  </div>


  


  

  );
};