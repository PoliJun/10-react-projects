import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";
import MealsPage from "./pages/MealsPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
