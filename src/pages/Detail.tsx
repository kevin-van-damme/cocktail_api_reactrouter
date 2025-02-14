import useSWR from "swr";
import { fetcher } from "../helpers.ts";
import { type Drink, Ingredient } from "../types.ts";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();

  const { data } = useSWR<{ drinks: Drink[] }>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );

  const drink = data?.drinks?.[0];

  const ingredientDescriptions = drink?.ingredients?.map((ingredient) => {
    const { data: ingredientData } = useSWR<{ ingredients: Ingredient[] }>(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${ingredient.idIngredient}`,
      fetcher
    );
    return (
      ingredientData?.ingredients?.[0]?.strDescription ||
      "No description available."
    );
  });

  return (
    <>
      {drink ? (
        <div className="details">
          <h1>{drink.strDrink}</h1>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />

          <h2>Ingredients</h2>
          <ul>
            {drink.ingredients?.map((ingredient, index) => (
              <li key={ingredient.idIngredient}>
                {ingredient.strIngredient} -{" "}
                {ingredient.strType || "Unknown Type"}
                <p>{ingredientDescriptions?.[index]}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Detail;
