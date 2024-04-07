import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
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
          <Route
            path="/counter"
            element={
              <Layout>
                <CounterPage />
              </Layout>
            }
          />
          <Route
            path="/todo"
            element={
              <Layout>
                <TodoPage />
              </Layout>
            }
          />
          <Route
            path="/meals"
            element={
              <Layout>
                <MealsPage />
              </Layout>
            }
          />
          <Route
            path="/calculator"
            element={
              <Layout>
                <CalculatorPage />
              </Layout>
            }
          />
          <Route
            path="/color"
            element={
              <Layout>
                <ToggleColorPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
