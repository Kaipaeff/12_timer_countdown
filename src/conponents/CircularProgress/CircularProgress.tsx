import { useMemo } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ICircularProgressProps } from '../../types/interfaces';
import { formatTimerTime, formatCountDownTime } from '../../services/formatTime';

export default function CircularProgress({...props}: ICircularProgressProps) {
  
  const formattedTime = useMemo(() => {
    return props.intervalIdRef ? formatTimerTime(props.time!) : formatCountDownTime(props.time!)
  }, [props.intervalIdRef, props.time])

  return (
  <CircularProgressbarStyles>
    <CircularProgressbar 
      value={props.time!} 
      // maxValue={60000}
      // counterClockwise={false}
      text={formattedTime}
      strokeWidth={props.intervalIdRef ? 0 : 3}
      styles={{
        path: {
          stroke: '#FE9F06',
        },
        text: {
          fill: '#fff',
          fontSize: '18px',
          fontWeight: '100',
        },
      }}
      />
  </CircularProgressbarStyles> 
)
}