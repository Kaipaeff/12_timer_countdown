import { ChangeEvent } from "react";

import { Slider, TextField } from "@mui/material";
import { SetTimeInnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";

import { ISetTimeComponentProps } from "../../types/interfaces";

  //! Сейчас инпуты работают по принципу или-или: ввод в один инпут стирает данные во втором. Нужно фиксить.

export default function SetTime({...props}: ISetTimeComponentProps) {

  const {isStarted, countSeconds, setCountSeconds} = props;

  let minutes = 0;
  let seconds = 0;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {  
    const {id, value} = event.target;
    if(!isStarted) {
      if (id === "minutes" && Number(value) > 0 && Number(value) <= 720) {
        minutes = Number(value) * 60;
      } else if (id === "seconds" && Number(value) > 0 && Number(value) <= 59) {
        seconds = Number(value) % 1000;
      }
      setCountSeconds((prev) => prev = seconds + minutes);
      // console.log('countSeconds_INPUTS:', countSeconds);
    }
  }
  
  const handleSliderChange = (event: Event, value: number | number[]) => {
    if(!isStarted && typeof value === "number") {
      setCountSeconds((prev) => prev = value);
      // console.log('countSeconds_SLIDER:', countSeconds);
    }
  }


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
        disabled={isStarted}
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
    </>
  )
}

