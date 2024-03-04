import { useState } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles } from "../ControlButton/ControlButton.styles";
import SetTime from "../SetTime/SetTime";


export default function Countdown() {
  const [time, setTime] = useState<number>(60000); //86399

  return (
    <>
      <SetTime />

      <CircularProgress time={time} setTime={setTime}/>
    
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles title={'Отмена'} bcg1="white"/>
        <StartControlButtonStyles title={'Старт'} bcg1="white"/>
      </InnerWrapperBlockStyles>
    </>
  )
}