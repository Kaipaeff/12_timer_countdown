import { ISwitchComponentProps } from "../../types/interfaces";
import { SwitchBlockStyles, SwitchTimerStyles, SwitchCountdownStyles, SwitchedModeStyles } from "./SwitchMode.styles";


export default function SwitchMode({mode, setMode}: ISwitchComponentProps) {

  const handleSwitchMode = (type: string): void => {
      setMode!(type);
  }

  return (
    <SwitchBlockStyles>
      <SwitchTimerStyles mode={mode} onClick={() => handleSwitchMode('timer')}>Timer</SwitchTimerStyles>
      <SwitchCountdownStyles mode={mode} onClick={() => handleSwitchMode('countdown')}>Countdown</SwitchCountdownStyles>
      <SwitchedModeStyles mode={mode}/>
    </SwitchBlockStyles>
  )
}