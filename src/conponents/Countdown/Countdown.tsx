import { useCallback, useEffect, memo } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, PauseControlButtonStyles, StartControlButtonStyles } from "../ControlButton/ControlButton.styles";
import SetTime from "../SetTime/SetTime";
import { ICountdownComponentProps } from "../../types/interfaces";

function Countdown({...props}: ICountdownComponentProps) {
  const {
    isStarted, 
    setIsStarted, 
    countSeconds, 
    setCountSeconds, 
    barMaxValue, 
    setBarMaxValue,
    countIntervalIdRef,
  } = props;

  useEffect(() => {
    if(!countSeconds) {
      setIsStarted(false);
      clearInterval(countIntervalIdRef!.current);
      countIntervalIdRef!.current = undefined;
      setBarMaxValue(0);
    }
   }, [countSeconds]);

  const handleStart = useCallback(() => {
    if(!isStarted && countSeconds >= 1) {
      countIntervalIdRef!.current = setInterval(() => {  
        setCountSeconds((prev: number) => prev - 1);
      }, 1000);
    } else {
      clearInterval(countIntervalIdRef!.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted, countSeconds, countIntervalIdRef!.current]);

  const handleReset = useCallback(() => {
    setCountSeconds(0);
    setIsStarted(false);
    clearInterval(countIntervalIdRef!.current);
    countIntervalIdRef!.current = undefined;
  }, [countIntervalIdRef!.current]); //! Спросить, нужно ли указывать функции в массиве зависимостей! //Уточнить насчет восклицательных знаков


  return (
    <>
      <SetTime 
        isStarted={isStarted} 
        countSeconds={countSeconds} 
        setCountSeconds={setCountSeconds} 
        countIntervalIdRef={countIntervalIdRef} 
        setBarMaxValue={setBarMaxValue}
      />

      <CircularProgress 
        countSeconds={countSeconds} 
        countIntervalIdRef={countIntervalIdRef} 
        isStarted={isStarted} 
        barMaxValue={barMaxValue} 
        setBarMaxValue={setBarMaxValue}
      />
      
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={countSeconds === 0 || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={!countIntervalIdRef!.current && !isStarted ? 'Старт' : 'Дальше'} disabled={countSeconds === 0} bcg1="white"/>}
        {isStarted && <PauseControlButtonStyles onClick={handleStart} title={'Пауза'} bcg1="white"/> }
      </InnerWrapperBlockStyles>
    </>
  )
}

export default memo(Countdown);