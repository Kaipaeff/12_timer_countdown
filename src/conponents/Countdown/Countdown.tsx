import { useRef, useCallback, useEffect } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import SetTime from "../SetTime/SetTime";
import { ICountdownComponentProps } from "../../types/interfaces";


export default function Countdown({isStarted, setIsStarted, countSeconds, setCountSeconds }: ICountdownComponentProps) {
  const countIntervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if(countSeconds === 0) {
      setIsStarted(false);
      clearInterval(countIntervalRef.current);
    }
  }, [countSeconds]);


  const handleStart = useCallback(() => {
    if(!isStarted && countSeconds >= 1000) {
      countIntervalRef.current = setInterval(() => {  
        setCountSeconds((prev: number) => prev > 0 ? prev - 100 : 0);
        console.log('HAVEorNOT?!');
      }, 100);
    } else {
      clearInterval(countIntervalRef.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted]);


  const handleReset = useCallback(() => {
    setCountSeconds(0);
    setIsStarted(false);
    clearInterval(countIntervalRef.current);
  }, [])
  

  return (
    <>
      <SetTime />

      <CircularProgress countSeconds={countSeconds} countIntervalRef={countIntervalRef}/>
    
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={countSeconds < 1000 || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={'Старт'} disabled={countSeconds < 1000} bcg1="white"/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'} bcg1="white"/>}
      </InnerWrapperBlockStyles>
    </>
  )
}