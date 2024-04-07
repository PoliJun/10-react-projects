import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import CounterPage from "./pages/CounterPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
