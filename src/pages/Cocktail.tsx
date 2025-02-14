import useSWR from "swr";
import { fetcher, slugit } from "../helpers.ts";
import { type Cocktail } from "../types.ts";
import { Link } from "react-router-dom"; // Fixed import

const Cocktails = () => {
  const { data, isLoading, error } = useSWR<{ drinks: Cocktail[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );

  const cocktails = data?.drinks || []; // Extract drinks array

  return (
    <>
      <div className="grid">
        <h2 className="producttitle">Lemon Cocktails</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading data</p>}
        <ul>
          {cocktails.map((cocktail) => (
            <li key={cocktail.idDrink}>
              <Link
                className="drinks"
                to={`/cocktails/${cocktail.idDrink}/${slugit(
                  cocktail.strDrink
                )}`}
              >
                <div>
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </div>
                <p>{cocktail.strDrink}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cocktails;
