import { ISwitchComponentProps } from "../../types/switchMode.interface";
import { SwitchBlockStyles, SwitchTimerStyles, SwitchCountdownStyles, SwitchedModeStyles } from "./SwitchMode.styles";


export default function SwitchMode({mode, setMode}: ISwitchComponentProps) {

  const handleSwitchMode = (type: string): void => {
    if(setMode) {
      setMode(type);
    }
  }

  return (
    <SwitchBlockStyles>
      <SwitchTimerStyles mode={mode} onClick={() => handleSwitchMode('timer')}>Таймер</SwitchTimerStyles>
      <SwitchCountdownStyles mode={mode} onClick={() => handleSwitchMode('countdown')}>Секундомер</SwitchCountdownStyles>
      <SwitchedModeStyles mode={mode}/>
    </SwitchBlockStyles>
  )
}