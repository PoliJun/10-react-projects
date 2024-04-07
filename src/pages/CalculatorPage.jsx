import { useState } from "react";
import Calculator from "../components/Calculator";

const CalculatorPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Calculator inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
};
export default CalculatorPage;
