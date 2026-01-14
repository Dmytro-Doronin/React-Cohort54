import { type ReactNode, useState } from "react";
import type { FavouriteId } from "./FavouritesTypes.ts";
import { FavouritesContext } from "./FavouritesContext.tsx";

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<FavouriteId[]>([]);

  const toggleFavourite = (id: FavouriteId) => {
    setFavourites((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  const isFavourite = (id: FavouriteId) => favourites.includes(id);

  const clearFavourites = () => setFavourites([]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite, clearFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
