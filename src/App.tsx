import SwitchMode from "./conponents/SwitchMode/SwitchMode";
import Timer from "./conponents/Timer/Timer";
import Countdown from "./conponents/Countdown/Countdown";

import { useState } from "react";

function App() {
  const [mode, setMode] = useState('timer');

  return (
    <div className="container">
      <SwitchMode mode={mode} setMode={setMode}/>
      {mode === 'timer' ? <Timer/> : <Countdown/>}
    </div>
  ) 
}

export default App;
