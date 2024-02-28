import { useState } from "react";
import { styled } from "styled-components";


interface SwitchTimerProps {
  mode: string;
}

interface SwitchedModeProps {
  mode: string;
}

interface SwitchCountdownProps {
  mode: string;
}

const SwitchBlock = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 530px;
  height: 50px;
  padding: 5px 34px 6px 73px;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;  
  background-color: #fff;
  border-radius: 25px;
`

const SwitchTimer = styled.span<SwitchTimerProps>`
  color: ${props => props.mode === 'timer' ? '#fff' : '#737373'};
  cursor: pointer;
  z-index: 3;
`

const SwitchCountdown = styled.span<SwitchCountdownProps>`
color: ${props => props.mode === 'countdown' ? '#fff' : '#737373'};
cursor: pointer;
  z-index: 3;
`

const SwitchedMode = styled.div<SwitchedModeProps>`
  position: absolute;
  top: 0;
  left: ${props => props.mode === 'timer' ? '0' : '50%'};
  width: 265px;
  height: 50px;
  background: #FE9F06;
  border-radius: 25px;
  transition: left 0.4s ease;
`


export default function SwitchMode() {
  const [mode, setMode] = useState('timer');

  const handleSwitchMode = (type: string) => {
    setMode(type );
  }

  return (
    <SwitchBlock>
      <SwitchTimer mode={mode} onClick={() => handleSwitchMode('timer')}>Таймер</SwitchTimer>
      <SwitchCountdown mode={mode} onClick={() => handleSwitchMode('countdown')}>Секундомер</SwitchCountdown>
      <SwitchedMode mode={mode}/>
    </SwitchBlock>
  )
}