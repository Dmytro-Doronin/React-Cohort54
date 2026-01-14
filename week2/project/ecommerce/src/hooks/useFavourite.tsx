import { useContext } from "react";
import { FavouritesContext } from "../context/favouritesContext/FavouritesContext.tsx";

export function useFavourites() {
  const ctx = useContext(FavouritesContext);
  if (!ctx) {
    throw new Error("useFavourites must be used within FavouritesProvider");
  }
  return ctx;
}
