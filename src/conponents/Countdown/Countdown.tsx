import { useCallback, useRef, useState } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { ControlButtonsBlockStyles } from "../../styles/ControlButtonsBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";


export default function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();


  const handleStart = useCallback(() => {
    if(!isStarted) {
      intervalRef.current = setInterval(() => {  
        setSeconds((prev) => prev + 100);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    setIsStarted((prev) => !prev);
  }, [isStarted]);


  const handleCancel = useCallback(() => {
    console.log('click');
    
    setSeconds(0);
    setIsStarted(false);
    clearInterval(intervalRef.current);
  }, [])


  return (
    <>
      <CircularProgress time={seconds} intervalRef={intervalRef}/>
      <ControlButtonsBlockStyles>
        
        <CancelControlButtonStyles onClick={handleCancel} title={'Сброс'} disabled={!seconds || isStarted}/>

        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={'Старт'}/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'}/>}

      </ControlButtonsBlockStyles>
    </>
  )
}