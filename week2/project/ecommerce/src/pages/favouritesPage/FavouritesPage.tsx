import { useFavourites } from "../../hooks/useFavourite.tsx";
import { useEffect, useMemo } from "react";
import { fetchFavouriteProducts } from "../../api/products/products-api.ts";
import { useFetch } from "../../hooks/useFetch.tsx";
import type { ProductsType } from "../../api/products/products.type.ts";
import { Loader } from "../../components/loader/Loader.tsx";
import { CardList } from "../../components/cardList/CardList.tsx";

export const FavouritesPage = () => {
  const { favourites } = useFavourites();

  const callback = useMemo(() => fetchFavouriteProducts, []);

  const { loading, data, request } = useFetch<ProductsType[], [number[]]>(
    callback,
  );

  useEffect(() => {
    if (favourites.length === 0) {
      return;
    }
    request(favourites);
  }, [favourites, request]);

  if (loading) {
    return <Loader />;
  }

  if (!data || favourites.length === 0) {
    return <div>There is no favourites</div>;
  }

  return <CardList loading={loading} products={data} />;
};
