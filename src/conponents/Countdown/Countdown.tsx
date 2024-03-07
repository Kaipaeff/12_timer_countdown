import { useRef, useCallback, useEffect } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, PauseControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import SetTime from "../SetTime/SetTime";
import { ICountdownComponentProps } from "../../types/interfaces";


export default function Countdown({...props}: ICountdownComponentProps) {
  const countIntervalIdRef = useRef<NodeJS.Timeout>();

  const {isStarted, setIsStarted, countSeconds, setCountSeconds} = props;

  //! в эффекте реализовать обнуление таймера при смене вкладки. Тут, или в Свитчере. Не важно, в самом конце можно сделать!

  useEffect(() => {
    if(countSeconds === 0) {
      setIsStarted(false);
      clearInterval(countIntervalIdRef.current);
    }
   }, [countSeconds])


  const handleStart = useCallback(() => {
    if(!isStarted && countSeconds >= 1) {
      countIntervalIdRef.current = setInterval(() => {  
        setCountSeconds((prev: number) => prev - 1);
        console.log('HAVEorNOT?!');
      }, 1000);
    } else {
      clearInterval(countIntervalIdRef.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted, countSeconds, countIntervalIdRef.current]);


  const handleReset = useCallback(() => {
    setCountSeconds(0);
    setIsStarted(false);
    clearInterval(countIntervalIdRef.current);
    countIntervalIdRef.current = undefined;
  }, [setCountSeconds, setIsStarted, countIntervalIdRef.current])


  console.log('countIntervalIdRef_from_COUNT', countIntervalIdRef.current);
  console.log('isStarted_from_COUNT', isStarted);


  return (
    <>
      <SetTime isStarted={isStarted} countSeconds={countSeconds} setCountSeconds={setCountSeconds}/>
      <CircularProgress countSeconds={countSeconds} countIntervalIdRef={countIntervalIdRef} isStarted={isStarted} />
      
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={countSeconds === 0 || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={!countIntervalIdRef.current ? 'Старт' : 'Дальше'} disabled={countSeconds === 0} bcg1="white"/>}
        {isStarted && <PauseControlButtonStyles onClick={handleStart} title={'Пауза'} bcg1="white"/> }
      </InnerWrapperBlockStyles>
    </>
  )
}