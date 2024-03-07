import { useRef, useCallback, memo } from "react";

import CircularProgress from "../CircularProgress/CircularProgress";

import { InnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles, StopControlButtonStyles } from "../ControlButton/ControlButton.styles";
import { ITimerComponentProps } from "../../types/interfaces";

//! При запущенном таймере переход на другую вкладку ломает таймер: остановить и сбросить невозможно, зацикливается. 

function Timer({...props}: ITimerComponentProps) {
  // const [seconds, setSeconds] = useState<number>(0);
  // const [isStarted, setIsStarted] = useState(false); //!вынес в App, позже уберу в useContext
  const timerIntervalIdRef = useRef<NodeJS.Timeout>();

  const {isStarted, setIsStarted, timerSeconds, setTimerSeconds} = props;


  const handleStart = useCallback(() => {
    if(!isStarted) {
      timerIntervalIdRef.current = setInterval(() => {  
        setTimerSeconds((prev: number) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerIntervalIdRef.current);
    }
    setIsStarted((prev: boolean) => !prev);
  }, [isStarted]);


  const handleReset = useCallback(() => {
    setTimerSeconds(0);
    setIsStarted(false);
    clearInterval(timerIntervalIdRef.current);
    timerIntervalIdRef.current = undefined;
  }, [])


  return (
    <>
      <CircularProgress timerSeconds={timerSeconds} timerIntervalIdRef={timerIntervalIdRef} isStarted={isStarted}/>
      <InnerWrapperBlockStyles>
        <CancelControlButtonStyles onClick={handleReset} title={'Сброс'} disabled={!timerSeconds || isStarted} bcg1="white"/>
        {!isStarted && <StartControlButtonStyles onClick={handleStart} title={!timerSeconds ? 'Старт' : 'Дальше'} bcg1="white"/>}
        {isStarted && <StopControlButtonStyles onClick={handleStart} title={'Стоп'} bcg1="white"/>}
      </InnerWrapperBlockStyles>
    </>
  )
}

export default memo(Timer);