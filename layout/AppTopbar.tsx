import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { AppTopbarRef } from "../types/types";
import AppBreadcrumb from "./AppBreadCrumb";
import { LayoutContext } from "./context/layoutcontext";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { onMenuToggle, showProfileSidebar, showConfigSidebar } =
    useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const [userData, setUserData] = useState<any>();
  const onConfigButtonClick = () => {
    showConfigSidebar();
  };

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
  }));

  useEffect(() => {
    setUserData(localStorage.getItem("user-country"));
  }, []);

  return (
    <div className="layout-topbar">
      <div className="topbar-start">
        <button
          ref={menubuttonRef}
          type="button"
          className="topbar-menubutton p-link p-trigger"
          onClick={onMenuToggle}
        >
          <i className="pi pi-bars"></i>
        </button>

        <AppBreadcrumb className="topbar-breadcrumb"></AppBreadcrumb>
      </div>

      <div className="topbar-end">
        <ul className="topbar-menu">
          <li className="topbar-search">
            <span className="p-input-icon-left">
              <i className="pi pi-search"></i>
              <InputText
                type="text"
                placeholder="Search"
                className="w-12rem sm:w-full"
              />
            </span>
          </li>
          <li className="ml-3">
            <Button
              type="button"
              icon="pi pi-cog"
              text
              rounded
              severity="secondary"
              className="flex-shrink-0"
              onClick={onConfigButtonClick}
            ></Button>
          </li>
          <li className="topbar-profile">
            <button
              type="button"
              className="p-link"
              onClick={showProfileSidebar}
            >
              <img src="/layout/images/avatar/avatar.png" alt="Profile" />
              <img
                alt="country-user"
                src={`/demo/images/flag/flag_placeholder.png`}
                className={`flag flag-${userData}`}
                style={{ width: "21px", height: "auto", marginTop: "-25px" }}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
