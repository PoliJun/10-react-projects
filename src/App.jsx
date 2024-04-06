import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="counter" element={<CounterPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
