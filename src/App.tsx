import { useState } from "react";

import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerStyles } from "./styles/ContainerStyles";


function App() {
  const [mode, setMode] = useState('timer');                        //!вынести в useContext
  const [isStarted, setIsStarted] = useState(false);                //!вынести в useContext
  const [timerSeconds, setTimerSeconds] = useState<number>(0);      //!вынести в useContext
  const [countSeconds, setCountSeconds] = useState<number>(0);      //!вынести в useContext
  const [barMaxValue, setBarMaxValue] = useState<number>(0);        //!вынести в useContext

  
  return (
    <ContainerStyles>
      <GlobalStyles />
      <SwitchMode 
        mode={mode} 
        setMode={setMode} 
        setIsStarted={setIsStarted} 
        setTimerSeconds={setTimerSeconds} 
        setCountSeconds={setCountSeconds} 
        countSeconds={countSeconds}
      />
      {mode === 'timer' && <Timer 
        isStarted={isStarted} 
        setIsStarted={setIsStarted} 
        timerSeconds={timerSeconds} 
        setTimerSeconds={setTimerSeconds}
      />}
      {mode === 'countdown' && <Countdown 
        isStarted={isStarted} 
        setIsStarted={setIsStarted} 
        countSeconds={countSeconds} 
        setCountSeconds={setCountSeconds} 
        barMaxValue={barMaxValue} 
        setBarMaxValue={setBarMaxValue} 
      />}
    </ContainerStyles>
  ) 
}

export default App;
