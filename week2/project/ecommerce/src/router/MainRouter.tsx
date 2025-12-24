import { RouterProvider } from "react-router-dom"

import {router} from "./router.tsx"
import { NotificationProvider } from "../context/notificationContext/NotificationProvider.tsx"

export function Router() {
    return (
        <NotificationProvider>
            <RouterProvider router={router} />
        </NotificationProvider>
    )
}