import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import "../styles/Meals.scss";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   items.map((strMeal,strMealThumb,idMeal)=>{
  //     return(
  //       <div className="card">
  //         <img src={strMealThumb)} alt={strMeal}
  //         <h2>{strMeal}</h2>
  //         <p>{idMeal}</p>
  //         </div>
  //     )}

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <div key={idMeal} className="card">
        <img src={strMealThumb} alt={strMeal} />
        <div className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </div>
      </div>
    );
  });

  return <section className="meals-root">{itemList}</section>;
};

export default Meals;
