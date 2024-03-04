import { useState } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import { ControlButtonsBlockStyles } from "../../styles/ControlButtonsBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles } from "../ControlButton/ControlButton.styles";


export default function Countdown() {
  const [time, setTime] = useState(60000); //86399

  return (
    <>
      <CircularProgress time={time} setTime={setTime}/>
    
      <ControlButtonsBlockStyles>
        <CancelControlButtonStyles title={'Отмена'}/>
        <StartControlButtonStyles title={'Старт'}/>
      </ControlButtonsBlockStyles>
    </>
  )
}