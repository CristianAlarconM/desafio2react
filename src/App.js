import { useState } from 'react';

import Input from "./components/Input";
import Boton from "./components/Boton";

function App() {
  const [estado, setPassword] = useState('');
  return (
    <div>

      <Input estado={estado} setPassword={setPassword} />
      {estado === "252525" && <Boton />}
    </div>
  );
}

export default App;
