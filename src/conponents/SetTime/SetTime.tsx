import { ChangeEvent } from "react";

import { Slider, TextField } from "@mui/material";
import { SetTimeInnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";

import { ISetTimeComponentProps } from "../../types/interfaces";


export default function SetTime({...props}: ISetTimeComponentProps) {

  const {isStarted, countSeconds, setCountSeconds} = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    let updatedSeconds = countSeconds;
    if (id === "minutes") {
      updatedSeconds = Number(value) * 60 * 1000;
    } else if (id === "seconds") {
      updatedSeconds = Number(value);
    }
    setCountSeconds(updatedSeconds);
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
          value={Math.floor(countSeconds / 1000 / 60)}
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
          value={countSeconds % 60000}
          onChange={handleInputChange}
        />
      </SetTimeInnerWrapperBlockStyles>

      <Slider
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
      />
    </>
  )
}

