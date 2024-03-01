import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbarStyles } from './CircularProgress.styles';

import { ITimerComponentProps } from '../../types/interfaces';


export default function CircularProgress({time}: ITimerComponentProps) {

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  
 return (
<CircularProgressbarStyles>
  <CircularProgressbar 
    value={time} 
    maxValue={time} //86399
    counterClockwise={false}
    text={formatTime(time)}
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
</CircularProgressbarStyles> )
}