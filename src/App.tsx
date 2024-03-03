import { useState } from "react";

import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerStyles } from "./styles/ContainerStyles";


function App() {
  const [mode, setMode] = useState('timer');

  return (
    <ContainerStyles>
      <GlobalStyles />

      <SwitchMode mode={mode} setMode={setMode}/>
      {mode === 'timer' ? <Timer/> : <Countdown/>}

    </ContainerStyles>
  ) 
}

export default App;
