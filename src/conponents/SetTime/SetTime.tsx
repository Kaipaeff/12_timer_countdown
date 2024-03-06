import { ChangeEvent } from "react";

import { Slider, TextField } from "@mui/material";
import { SetTimeInnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";

import { ISetTimeComponentProps } from "../../types/interfaces";


export default function SetTime({...props}: ISetTimeComponentProps) {

  const {isStarted, countSeconds, setCountSeconds} = props;

  let minutes = 0;
  let seconds = 0;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {  
    if(!isStarted) {
      if (event.target.id === "minutes") {
        minutes = Number(event.target.value) * 60 * 1000;
      } else if (event.target.id === "seconds") {
        seconds = Number(event.target.value) * 1000;
      }
      setCountSeconds(seconds + minutes);
    }
  }
  
  const handleSliderChange = (event: Event, value: number | number[]) => {
    if(!isStarted && typeof value === "number") {
      setCountSeconds(value);
    }
  }
  
  

  return (
    <>
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
          disabled={isStarted}
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
          disabled={isStarted}
          inputProps={{ min: 0, max: 59 }}
          value={countSeconds % 60}
          onChange={handleInputChange}
        />
      </SetTimeInnerWrapperBlockStyles>

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
        disabled={isStarted}
        onChange={handleSliderChange}
      />
    </>
  )
}

