import { ISwitchComponentProps } from "../../types/switchMode.interface";
import { SwitchBlock, SwitchTimer, SwitchCountdown, SwitchedMode } from "./styledComponents";


export default function SwitchMode({mode, setMode}: ISwitchComponentProps) {

  const handleSwitchMode = (type: string): void => {
    if(setMode) {
      setMode(type);
    }
  }

  return (
    <SwitchBlock>
      <SwitchTimer mode={mode} onClick={() => handleSwitchMode('timer')}>Таймер</SwitchTimer>
      <SwitchCountdown mode={mode} onClick={() => handleSwitchMode('countdown')}>Секундомер</SwitchCountdown>
      <SwitchedMode mode={mode}/>
    </SwitchBlock>
  )
}