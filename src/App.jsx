import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes> </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
