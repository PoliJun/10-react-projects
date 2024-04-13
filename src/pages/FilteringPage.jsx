import Nav from "../components/advanced-filtering/Nav";
import Products from "../components/advanced-filtering/Products";
import Recommend from "../components/advanced-filtering/Recommend";

const FilteringPage = () => {
  return (
    <div className="filtering-root">
      <Nav />
      <Products />
      <Recommend />
    </div>
  );
};
export default FilteringPage;
