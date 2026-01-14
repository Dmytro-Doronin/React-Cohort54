import { RouterProvider } from "react-router-dom";

import { router } from "./router.tsx";
import { NotificationProvider } from "../context/notificationContext/NotificationProvider.tsx";
import { FavouritesProvider } from "../context/favouritesContext/FavouritesProvider.tsx";

export function Router() {
  return (
    <NotificationProvider>
      <FavouritesProvider>
        <RouterProvider router={router} />
      </FavouritesProvider>
    </NotificationProvider>
  );
}
