import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ITimerComponentProps } from '../../types/interfaces';
import { formatTime, countDownTime } from '../../services/formatTime';


export default function CircularProgress({...props}: ITimerComponentProps) {
  
 return (
  <CircularProgressbarStyles>
    <CircularProgressbar 
      value={props.time} 
      minValue={0}
      maxValue={props.time >= 60000 ? 60000 : 60000}
      counterClockwise={false}
      text={props.intervalRef ? countDownTime(props.time) : formatTime(props.time)}
      strokeWidth={3}
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