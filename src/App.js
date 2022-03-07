import React, { useState } from "react";
import "./index.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const[ctime, setCtime] = useState();

  //Take a function :
  const UpdateTime = () => {
     time = new Date().toLocaleTimeString();
     setCtime(time);
  };


  //This is a function of javScript for time handler
  //Pass the one callback function that we created UpdateTime
  //Pass the 1000 miliSecond = 1 second so. It will update after 1 sec.
  
  setInterval(UpdateTime,1000);

  return(
    <>
        <h1> {ctime} </h1>
    </>
  );
};
export default App;