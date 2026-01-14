export type categoriesType =
  | "electronics"
  | "All"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";
export type CategoriesWithoutAll = Exclude<categoriesType, "All">;
