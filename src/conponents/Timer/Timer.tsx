import { useState, useRef, useCallback, memo } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import { ITimerComponentProps } from "../../types/interfaces";


function Timer({isStarted, setIsStarted}: ITimerComponentProps) {
  const [seconds, setSeconds] = useState<number>(0);
  // const [isStarted, setIsStarted] = useState(false); //вынес в App, позже уберу в useContext
  const intervalIdRef = useRef<NodeJS.Timeout>();


  const handleStart = useCallback(() => {
    if(!isStarted) {
      intervalIdRef.current = setInterval(() => {  
        setSeconds((prev: number) => prev + 100);
      }, 100);
    } else {
      clearInterval(intervalIdRef.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted]);


  const handleReset = useCallback(() => {
    setSeconds(0);
    setIsStarted(false);
    clearInterval(intervalIdRef.current);
  }, [])


  return (
    <>
      <CircularProgress time={seconds} intervalIdRef={intervalIdRef}/>
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={!seconds || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={'Старт'} bcg1="white"/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'} bcg1="white"/>}
      </InnerWrapperBlockStyles>
    </>
  )
}

export default memo(Timer);