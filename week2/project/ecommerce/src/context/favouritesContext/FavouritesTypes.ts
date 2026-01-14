export type FavouriteId = number;

export type FavouritesContextValue = {
  favourites: FavouriteId[];
  toggleFavourite: (id: FavouriteId) => void;
  isFavourite: (id: FavouriteId) => boolean;
  clearFavourites: () => void;
};
