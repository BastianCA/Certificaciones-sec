import type { MenuModel } from "../types/types";
import AppSubMenu from "./AppSubMenu";

const AppMenu = () => {
  const model: MenuModel[] = [
    {
      label: "Dashboards",
      icon: "pi pi-home",
      items: [
        {
          label: "E-Commerce",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Banking",
          icon: "pi pi-fw pi-image",
          to: "/dashboard-banking",
        },
      ],
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
