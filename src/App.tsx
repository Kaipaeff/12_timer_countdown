import { useState } from "react";

import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerStyles } from "./styles/ContainerStyles";


function App() {
  const [mode, setMode] = useState('countdown'); //!данный стэйт лучше вынести в контекст, или компонент SwitchMode
  const [isStarted, setIsStarted] = useState(false); //!вынести стэйт в useContext
  const [timerSeconds, setTimerSeconds] = useState<number>(0); //!вынести стэйт в useContext
  const [countSeconds, setCountSeconds] = useState<number>(0); //!вынести стэйт в useContext

  
  return (
    <ContainerStyles>
      <GlobalStyles />
      <SwitchMode mode={mode} setMode={setMode} setIsStarted={setIsStarted} setTimerSeconds={setTimerSeconds} setCountSeconds={setCountSeconds} countSeconds={countSeconds}/>
      {mode === 'timer' && <Timer isStarted={isStarted} setIsStarted={setIsStarted} timerSeconds={timerSeconds} setTimerSeconds={setTimerSeconds}/>}
      {mode === 'countdown' && <Countdown isStarted={isStarted} setIsStarted={setIsStarted} countSeconds={countSeconds} setCountSeconds={setCountSeconds}/>}
    </ContainerStyles>
  ) 
}

export default App;
