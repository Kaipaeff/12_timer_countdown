import { ISwitchComponentProps } from "../../types/interfaces";
import { SwitchBlockStyles, SwitchTimerStyles, SwitchCountdownStyles, SwitchedModeStyles } from "./SwitchMode.styles";

export default function SwitchMode({...props}: ISwitchComponentProps) {

  const {setMode, setIsStarted, setTimerSeconds, setCountSeconds, mode, countSeconds} = props;

  const handleSwitchMode = (type: string): void => {
    setMode!(type);
    setIsStarted!(false);
    setTimerSeconds!(0);
    setCountSeconds!(countSeconds!);
  }


  return (
    <SwitchBlockStyles>
      <SwitchTimerStyles mode={mode} onClick={() => handleSwitchMode('timer')}>Timer</SwitchTimerStyles>
      <SwitchCountdownStyles mode={mode} onClick={() => handleSwitchMode('countdown')}>Countdown</SwitchCountdownStyles>
      <SwitchedModeStyles mode={mode}/>
    </SwitchBlockStyles>
  )
}