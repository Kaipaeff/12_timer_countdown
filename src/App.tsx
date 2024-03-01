import { useState } from "react";

import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { GlobalStyles } from "./styles/GlobalStyles";
import { ContainerStyles } from "./styles/ContainerStyles";

import { ControlButtonsBlockStyles } from "./styles/ControlButtonsBlockStyles";
import { CancelControlButtonStyles, StartControlButtonStyles } from "./conponents/ControlButton/ControlButton.styles";


function App() {
  const [mode, setMode] = useState('timer');

  return (
    <ContainerStyles>
      <GlobalStyles />

      <SwitchMode mode={mode} setMode={setMode}/>
      {mode === 'timer' ? <Timer/> : <Countdown/>}

      <ControlButtonsBlockStyles>
        <CancelControlButtonStyles title={'Отмена'}/>
        <StartControlButtonStyles title={'Старт'}/>
      </ControlButtonsBlockStyles>

    </ContainerStyles>
  ) 
}

export default App;
