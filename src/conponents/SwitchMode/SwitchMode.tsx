import { memo, useCallback } from "react";

import { SwitchBlockStyles, SwitchTimerStyles, SwitchCountdownStyles, SwitchedModeStyles } from "./SwitchMode.styles";
import { ISwitchComponentProps } from "../../types/interfaces";

function SwitchMode({...props}: ISwitchComponentProps) {
  const {
    setMode, 
    setIsStarted, 
    setTimerSeconds, 
    setCountSeconds, 
    mode, 
    countSeconds,
    timerIntervalIdRef,
    countIntervalIdRef,
  } = props;

  const handleSwitchMode = useCallback((type: string): void => {
    setMode!(type);
    setIsStarted!(false);
    setTimerSeconds!(0);
    setCountSeconds!(countSeconds!);
    clearInterval(timerIntervalIdRef!.current);
    timerIntervalIdRef!.current = undefined;
    clearInterval(countIntervalIdRef!.current);
    countIntervalIdRef!.current = undefined;
  }, [countSeconds]);

  return (
    <SwitchBlockStyles>
      <SwitchTimerStyles mode={mode} onClick={() => handleSwitchMode('timer')}>Timer</SwitchTimerStyles>
      <SwitchCountdownStyles mode={mode} onClick={() => handleSwitchMode('countdown')}>Countdown</SwitchCountdownStyles>
      <SwitchedModeStyles mode={mode}/>
    </SwitchBlockStyles>
  )
}

export default memo(SwitchMode);