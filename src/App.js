import { useState } from 'react';

import Input from "./components/Input";
import Boton from "./components/Boton";

function App() {
  const [estado, setEstado] = useState('');
  return (
    <div>

      <Input estado={estado} setEstado={setEstado} />
      {estado === "252525" && <Boton />}
    </div>
  );
}

export default App;
