import useSWR from "swr";
import { fetcher } from "../helpers.ts";
import { Cocktail } from "../types.ts";

const HomeK = () => {
  const { data, isLoading, error } = useSWR<{ drinks: Cocktail[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    fetcher
  );

  const randCocktails = data?.drinks || [];

  return (
    <>
      <div className="homepage_text">Welcome to Crafthouse Cocktails!</div>

      <h2 className="hourdrink">Cocktail of the hour!</h2>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}

      {randCocktails.map((randomDrink) => (
        <div key={randomDrink.idDrink} className="home-pagedrink">
          <h3>{randomDrink.strDrink}</h3>
          <div>
            <img src={randomDrink.strDrinkThumb} alt={randomDrink.strDrink} />
          </div>
          <button type="submit">Order now</button>
        </div>
      ))}
    </>
  );
};

export default HomeK;
