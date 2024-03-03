import { useState } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import { ControlButtonsBlockStyles } from "../../styles/ControlButtonsBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles } from "../ControlButton/ControlButton.styles";


export default function Timer() {
  const [time, setTime] = useState(99); //86399

  return (
    <>
      <CircularProgress time={time}/>
    
      <ControlButtonsBlockStyles>
        <CancelControlButtonStyles title={'Отмена'}/>
        <StartControlButtonStyles title={'Старт'}/>
      </ControlButtonsBlockStyles>
    </>
  )
}