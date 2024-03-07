import { useEffect, useMemo } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ICircularProgressProps } from '../../types/interfaces';
import { formatTimerTime, formatCountDownTime } from '../../services/formatTime';

export default function CircularProgress({...props}: ICircularProgressProps) {

  const {timerIntervalIdRef, countIntervalIdRef, timerSeconds, countSeconds, isStarted} = props;

  let totalTime;

  useEffect(() => {
    totalTime = countSeconds; //! тут не закончил, нужно разобраться
    console.log('totalTime:', totalTime, 'countSeconds:', countSeconds);
  }, [])
  
  const formattedTime = useMemo(() => {
    return timerIntervalIdRef ? formatTimerTime(timerSeconds!) : formatCountDownTime(countSeconds!)
  }, [timerIntervalIdRef, timerSeconds, countSeconds])

  console.log('countIntervalIdRef_fromCircular', countIntervalIdRef?.current);
  console.log('isStarted_fromCircular', isStarted);
  

  return (
  <CircularProgressbarStyles>
    <CircularProgressbar 
      value={countSeconds!} 
      minValue={0}
      maxValue={totalTime} //! Это выражение не работает! Нужно значение инпута помещать в стейт, класть в контекст и доставать тут для использования.
      counterClockwise={true}
      // circleRatio={1}
      text={formattedTime}
      strokeWidth={4}
      styles={{
        path: 
        {stroke:
          isStarted ? '#DEFFE6' // Светло-зеленый
            : (timerIntervalIdRef?.current || countIntervalIdRef?.current) ? '#FFF0D7' // Светло-оранжевый
            : '#D6D6D6' // Серый
        },  
        text: {
          fill: '#737373',
          fontSize: '20px',
          fontWeight: '100',
        },
      }}
      />
  </CircularProgressbarStyles> 
)
}