export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
  strDescription?: string;
}

export interface Drink extends Cocktail {
  ingredients: Ingredient[];
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strDescription?: string;
  strType?: string;
  strAlcohol?: string;
  strABV?: string | null;
}
