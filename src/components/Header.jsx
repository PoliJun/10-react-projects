import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>HOME</Link>
      <Link to={"/counter"}>COUNTER</Link> <Link to={"/todo"}>TODO</Link>
      <Link to={"/meals"}>MEALS</Link>
      <Link to={"/calculator"}>CALCULATOR</Link>
      <Link to={"/color"}>Toggle Color</Link>
      <Link to={"/search-bar"}>Hidden Search Bar</Link>
      <Link to={"/testimonials"}>Testimonials</Link>
      <Link to={"/accordion"}>Accordion</Link>
      <Link to={"/form"}>Form Validation</Link>
      <Link to={"/filtering"}>Advanced-Filtering</Link>
    </header>
  );
};
export default Header;
