import { useCallback, memo } from "react";
import CircularProgress from "../CircularProgress/CircularProgress";
import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import { ITimerComponentProps } from "../../types/interfaces";

function Timer({...props}: ITimerComponentProps) {
  const {
    isStarted, 
    setIsStarted, 
    timerSeconds, 
    setTimerSeconds, 
    timerIntervalIdRef
  } = props;

  const handleStart = useCallback(() => {
    if(!isStarted) {
      timerIntervalIdRef!.current = setInterval(() => {  
        setTimerSeconds((prev: number) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerIntervalIdRef!.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted, timerIntervalIdRef!.current]);

  const handleReset = useCallback(() => {
    setTimerSeconds(0);
    setIsStarted(false);
    clearInterval(timerIntervalIdRef!.current);
    timerIntervalIdRef!.current = undefined;
  }, [timerIntervalIdRef!.current])

  return (
    <>
      <CircularProgress 
        timerSeconds={timerSeconds} 
        timerIntervalIdRef={timerIntervalIdRef} 
        isStarted={isStarted}
      />
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={!timerSeconds || isStarted} backgroundColor1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={!timerSeconds ? 'Старт' : 'Дальше'} backgroundColor1="white"/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'} backgroundColor1="white"/>}
      </InnerWrapperBlockStyles>
    </>
  )
}

export default memo(Timer);