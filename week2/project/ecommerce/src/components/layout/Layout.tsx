import { Outlet } from "react-router-dom";
import { Header } from "../header/Header.tsx";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};
