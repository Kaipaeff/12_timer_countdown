import { ISwitchComponentProps } from "../../types/interfaces";
import { SwitchBlockStyles, SwitchTimerStyles, SwitchCountdownStyles, SwitchedModeStyles } from "./SwitchMode.styles";


export default function SwitchMode({...props}: ISwitchComponentProps) {

  const handleSwitchMode = (type: string): void => {
      props.setMode!(type);
      props.setIsStarted!(false);
      props.setTimerSeconds!(0);
      props.setCountSeconds!(props.countSeconds!);
  }

  return (
    <SwitchBlockStyles>
      <SwitchTimerStyles mode={props.mode} onClick={() => handleSwitchMode('timer')}>Timer</SwitchTimerStyles>
      <SwitchCountdownStyles mode={props.mode} onClick={() => handleSwitchMode('countdown')}>Countdown</SwitchCountdownStyles>
      <SwitchedModeStyles mode={props.mode}/>
    </SwitchBlockStyles>
  )
}