import { useMemo } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ICircularProgressProps } from '../../types/interfaces';
import { formatTimerTime, formatCountDownTime } from '../../services/formatTime';

export default function CircularProgress({...props}: ICircularProgressProps) {

  const {intervalIdRef, timerSeconds, countSeconds} = props;
  
  const formattedTime = useMemo(() => {
    return intervalIdRef ? formatTimerTime(timerSeconds!) : formatCountDownTime(countSeconds!) //! здесь было так: : formatCountDownTime(countSeconds! / 60). Изменил, тестирую.
  }, [intervalIdRef, timerSeconds, countSeconds])
  

  return (
  <CircularProgressbarStyles>
    <CircularProgressbar 
      value={countSeconds!} 
      maxValue={countSeconds! > 3600 ? countSeconds! : 3600} //! Протестировать данное выражение. Не уверен в правильности.
      counterClockwise={true}
      text={formattedTime}
      strokeWidth={props.intervalIdRef ? 0 : 3}
      styles={{
        path: {
          stroke: '#FE9F06',
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