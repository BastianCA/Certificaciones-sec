import Link from "next/link";
import { useContext } from "react";
import { LayoutState } from "../types/layout";
import AppMenu from "./AppMenu";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";

const AppSidebar = () => {
  const { setLayoutState } = useContext(LayoutContext);
  const anchor = () => {
    setLayoutState((prevLayoutState: LayoutState) => ({
      ...prevLayoutState,
      anchored: !prevLayoutState.anchored,
    }));
  };
  return (
    <>
      <div className="sidebar-header">
        <Link href="/dashboard-e-commerce" className="app-logo">
          <img
            className="app-logo-normal"
            src="/layout/images/Sodimac.png"
            alt="logo-sodimac"
          />
          <img
            className="app-logo-small"
            src="/layout/images/Logo-homecenter-Barra de navegacion.png"
            alt="logo-small-sodimac"
          />
        </Link>
        <button
          className="layout-sidebar-anchor p-link z-2 mb-2"
          type="button"
          onClick={anchor}
        ></button>
      </div>

      <div className="layout-menu-container">
        <MenuProvider>
          <AppMenu />
        </MenuProvider>
      </div>
    </>
  );
};

export default AppSidebar;
