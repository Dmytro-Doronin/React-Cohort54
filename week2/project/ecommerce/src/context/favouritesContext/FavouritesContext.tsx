import { createContext } from "react";
import type { FavouritesContextValue } from "./FavouritesTypes.ts";

export const FavouritesContext = createContext<
  FavouritesContextValue | undefined
>(undefined);
