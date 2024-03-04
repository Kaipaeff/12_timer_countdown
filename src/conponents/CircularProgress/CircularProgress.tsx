import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ICircularProgressProps } from '../../types/interfaces';
import { formatTime, countDownTime } from '../../services/formatTime';

export default function CircularProgress({...props}: ICircularProgressProps) {
  return (
  <CircularProgressbarStyles>
    <CircularProgressbar 
      value={props.time!} 
      // maxValue={60000}
      // counterClockwise={false}
      text={props.intervalIdRef ? countDownTime(props.time!) : formatTime(props.time!)}
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