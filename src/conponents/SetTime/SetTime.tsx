import { ChangeEvent, memo, useCallback } from "react";

import { Slider, TextField } from "@mui/material";
import { SetTimeInnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";

import { ISetTimeComponentProps } from "../../types/interfaces";


function SetTime({...props}: ISetTimeComponentProps) {  
  const {isStarted, countSeconds, setCountSeconds, countIntervalIdRef, setBarMaxValue} = props;

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {  
    const {id, value} = event.target;
    if(!isStarted) {
      const updatedMinutes = Number(value) * 60;
      const updatedSeconds = Number(value) % 1000
      if (id === "minutes" && Number(value) > 0 && Number(value) <= 720) {
        setCountSeconds(prev => updatedMinutes + prev % 60);
        setBarMaxValue(prev => updatedMinutes + prev % 60);
      } else if (id === "seconds" && Number(value) > 0 && Number(value) <= 59) {
        setCountSeconds(prev => (Math.floor(prev / 60) * 60) + updatedSeconds);
        setBarMaxValue(prev => (Math.floor(prev / 60) * 60) + updatedSeconds);
      }
    }
  }, [isStarted]);

  const handleSliderChange = useCallback((_event: Event, value: number | number[]) => {
    if(!isStarted && typeof value === "number") {
      setCountSeconds(prev => prev = value);
      setBarMaxValue(prev => prev = value);
    }
  }, [isStarted]);


  return (
    <>
      <Slider
        id="slider"
        aria-label="Seconds"
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${Math.floor(value / 60)}:${(value % 60 < 10 ? '0' : '')}${value % 60}`}
        defaultValue={0}
        step={15}
        min={0}
        max={3600}
        value={countSeconds}
        color={'warning'}
        disabled={isStarted || (countIntervalIdRef?.current && !isStarted )}
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
          disabled={isStarted || (countIntervalIdRef?.current && !isStarted )}
          inputProps={{ min: 0, max: 720 }}
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
          disabled={isStarted || (countIntervalIdRef?.current && !isStarted )}
          inputProps={{ min: 0, max: 59 }}
          value={countSeconds % 60}
          onChange={handleInputChange}
        />
      </SetTimeInnerWrapperBlockStyles>
    </>
  )
}

export default memo(SetTime);