import { ChangeEvent, memo, useCallback } from 'react';
import { Slider, TextField } from '@mui/material';

import { SetTimeInnerWrapperBlockStyles } from '../../styles/InnerWrapperBlockStyles';
import { ISetTimeComponentProps } from '../../types/interfaces';

function SetTime({ ...props }: ISetTimeComponentProps) {
  const { isStarted, countSeconds, setCountSeconds, countIntervalIdRef, setBarMaxValue } = props;

  const hour = 3600;
  const stepValue = 15;
  const maxMinutesValue = 720;
  const maxSecondsValue = 59;
  const valueLabelFormat = (value: number): string =>
    `${Math.floor(value / 60)}:${value % 60 < 10 ? '0' : ''}${value % 60}`;
  const isDisabled = isStarted || (countIntervalIdRef?.current && !isStarted);

  const handleInputChange = useCallback(
    ({ target: { id, value } }: ChangeEvent<HTMLInputElement>) => {
      if (!isStarted) {
        const updatedMinutes = Number(value) * 60;
        const updatedSeconds = Number(value) % 1000;
        if (id === 'minutes' && Number(value) > 0 && Number(value) <= 720) {
          setCountSeconds(prev => updatedMinutes + (prev % 60));
          setBarMaxValue(prev => updatedMinutes + (prev % 60));
        } else if (id === 'seconds' && Number(value) > 0 && Number(value) <= 59) {
          setCountSeconds(prev => Math.floor(prev / 60) * 60 + updatedSeconds);
          setBarMaxValue(prev => Math.floor(prev / 60) * 60 + updatedSeconds);
        }
      }
    },
    [isStarted],
  );

  const handleSliderChange = useCallback(
    (_event: Event, value: number | number[]) => {
      if (!isStarted && typeof value === 'number') {
        setCountSeconds(value);
        setBarMaxValue(value);
      }
    },
    [isStarted],
  );

  return (
    <>
      <Slider
        id="slider"
        aria-label="Seconds"
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        defaultValue={0}
        step={stepValue}
        min={0}
        max={hour}
        value={countSeconds}
        color={'warning'}
        disabled={isDisabled}
        onChange={handleSliderChange}
      />
      <SetTimeInnerWrapperBlockStyles>
        <TextField
          id="minutes"
          label="Minutes"
          type="number"
          color="warning"
          sx={{
            width: 120,
          }}
          size="small"
          disabled={isDisabled}
          inputProps={{ min: 0, max: maxMinutesValue }}
          value={Math.floor(countSeconds / 60)}
          onChange={handleInputChange}
        />

        <TextField
          id="seconds"
          label="Seconds"
          type="number"
          color="warning"
          sx={{
            width: 120,
          }}
          size="small"
          disabled={isDisabled}
          inputProps={{ min: 0, max: maxSecondsValue }}
          value={countSeconds % 60}
          onChange={handleInputChange}
        />
      </SetTimeInnerWrapperBlockStyles>
    </>
  );
}

export default memo(SetTime);
