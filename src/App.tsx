import { useState } from "react";

import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerStyles } from "./styles/ContainerStyles";


function App() {
  const [mode, setMode] = useState('countdown'); //!данный стэйт лучше вынести в контекст, или компонент SwitchMode
  const [isStarted, setIsStarted] = useState(false); //!вынести стэйт в useContext

  return (
    <ContainerStyles>
      <GlobalStyles />
      <SwitchMode mode={mode} setMode={setMode}/>
      {mode === 'timer' && <Timer isStarted={isStarted} setIsStarted={setIsStarted}/>}
      {mode === 'countdown' && <Countdown/>}
    </ContainerStyles>
  ) 
}

export default App;
