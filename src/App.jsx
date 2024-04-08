import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CalculatorPage from "./pages/CalculatorPage";
import CounterPage from "./pages/CounterPage";
import MealsPage from "./pages/MealsPage";
import TodoPage from "./pages/TodoPage";
import ToggleColorPage from "./pages/ToggleColorPage";
import HiddenSearchBar from "./pages/HiddenSearchBar";
import "./styles/App.scss";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <div></div>
              </Layout>
            }
          />
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
          <Route
            path="/search-bar"
            element={
              <Layout>
                <HiddenSearchBar />
              </Layout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Layout>
                <Testimonials />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
