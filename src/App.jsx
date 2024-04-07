import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalculatorPage from "./pages/CalculatorPage";
import CounterPage from "./pages/CounterPage";
import MealsPage from "./pages/MealsPage";
import TodoPage from "./pages/TodoPage";
import ToggleColorPage from "./pages/ToggleColorPage";
import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/color" element={<ToggleColorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
