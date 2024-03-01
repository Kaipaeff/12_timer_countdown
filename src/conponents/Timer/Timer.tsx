import { useState } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";


export default function Timer() {
  const [time, setTime] = useState(0); //86399





  return (
    <>
      <CircularProgress time={time}/>
    </>
  )
}