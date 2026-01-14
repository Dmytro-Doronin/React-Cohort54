import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { HomePage } from "../pages/homePage/HomePage.tsx";
import { ProductPage } from "../pages/productPage/ProductPage.tsx";
import { FavouritesPage } from "../pages/favouritesPage/FavouritesPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page not found</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:id", element: <ProductPage /> },
      { path: "favourites", element: <FavouritesPage /> },
    ],
  },
]);
