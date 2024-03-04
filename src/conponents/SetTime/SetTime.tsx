import { Slider, TextField } from "@mui/material";
import { SetTimeInnerWrapperBlockStyles } from "../../styles/InnerWrapperBlockStyles";


export default function SetTime() {
  return (
    <>
      <SetTimeInnerWrapperBlockStyles>
        <TextField
          id="outlined-number"
          label="Minutes"
          type="number"
          color="warning"
          sx={{
            width: 120,
          }}
          size="small"
          inputProps={{ min: 0, max: 720 }}
        />

        <TextField
          id="outlined-number"
          label="Seconds"
          type="number"
          color="warning"
          sx={{
            width: 120,
          }}
          size="small"
          inputProps={{ min: 0, max: 59 }}
        />
      </SetTimeInnerWrapperBlockStyles>

      <Slider
        aria-label="Seconds"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={15}
        min={0}
        max={720}
        color={'warning'}
      />
    </>
  )
}

