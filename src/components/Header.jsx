import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/counter"}>COUNTER</Link> <Link to={"/todo"}>TODO</Link>{" "}
      <Link to={"/meals"}>MEALS</Link>{" "}
      <Link to={"/calculator"}>CALCULATOR</Link>{" "}
      <Link to={"/color"}>COLOR</Link> <Link to={""}>Home</Link>
      {""}
    </header>
  );
};
export default Header;
