import { memo, useMemo } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarStyles, ProgressbarMainValueStyles } from './CircularProgress.styles';
import { ICircularProgressProps } from '../../types/interfaces';
import { formatTimerTime, formatCountDownTime } from '../../utilities/formatTime';

function CircularProgress({...props}: ICircularProgressProps) {
  const {
    timerIntervalIdRef, 
    countIntervalIdRef, 
    timerSeconds, 
    countSeconds, 
    isStarted, 
    barMaxValue,  
  } = props;

  const formattedTime = useMemo(() => {
    return timerSeconds ? formatTimerTime(timerSeconds) : countSeconds ? formatCountDownTime(countSeconds) : undefined;
  }, [timerSeconds, countSeconds]);

  const progressValue = countSeconds ? countSeconds : timerSeconds ? Math.floor(timerSeconds / 1000) : 0;
  const progressMaxValue = timerIntervalIdRef ? 3600 : barMaxValue;
  const progressDirection = countIntervalIdRef ? true : false;
  const progressText = formattedTime || (timerIntervalIdRef ? `00:00:00` : `00:00`);
  const progressStrokeColor = isStarted ? '#DEFFE6' : (timerIntervalIdRef?.current || countIntervalIdRef?.current) ? '#FFF0D7' : '#D6D6D6';
  const progressMainValue = barMaxValue ? formatCountDownTime(barMaxValue) : `00:00`;

  return (
    <CircularProgressbarStyles>
      {countIntervalIdRef && <ProgressbarMainValueStyles>{progressMainValue}</ProgressbarMainValueStyles>}
      <CircularProgressbar 
        value={progressValue}
        maxValue={progressMaxValue}
        counterClockwise={progressDirection}
        text={progressText}
        strokeWidth={4}
        styles={{
          path: 
          {stroke: progressStrokeColor},  
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

export default memo(CircularProgress);