import { useRef, useCallback, useEffect } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import SetTime from "../SetTime/SetTime";
import { ICountdownComponentProps } from "../../types/interfaces";


export default function Countdown({...props}: ICountdownComponentProps) {
  const countIntervalRef = useRef<NodeJS.Timeout>();

  const {isStarted, setIsStarted, countSeconds, setCountSeconds} = props;

  //! в эффекте реализовать обнуление таймера при смене вкладки. Тут, или в Свитчере. Не важно, в самом конце можно сделать!

  useEffect(() => {
    if(countSeconds === 0) {
      setIsStarted(false);
      clearInterval(countIntervalRef.current);
    }
   }, [countSeconds])


  const handleStart = useCallback(() => {
    if(!isStarted && countSeconds >= 1) {
      countIntervalRef.current = setInterval(() => {  
        setCountSeconds((prev: number) => prev - 1);
        console.log('HAVEorNOT?!');
      }, 1000);
    } else {
      clearInterval(countIntervalRef.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted, countSeconds]);


  const handleReset = useCallback(() => {
    setCountSeconds(0);
    setIsStarted(false);
    clearInterval(countIntervalRef.current);
  }, [setCountSeconds, setIsStarted, countIntervalRef])


  return (
    <>
      <SetTime isStarted={isStarted} countSeconds={countSeconds} setCountSeconds={setCountSeconds}/>
      <CircularProgress countSeconds={countSeconds} countIntervalRef={countIntervalRef}/>
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={countSeconds === 0 || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={'Старт'} disabled={countSeconds === 0} bcg1="white"/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'} bcg1="white"/>}
      </InnerWrapperBlockStyles>
    </>
  )
}