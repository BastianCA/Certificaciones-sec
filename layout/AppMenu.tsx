import type { MenuModel } from "../types/types";
import AppSubMenu from "./AppSubMenu";

const AppMenu = () => {
  const model: MenuModel[] = [
    // {
    //   label: "Dashboards",
    //   icon: "pi pi-home",
    //   items: [
    //     {
    //       label: "E-Commerce",
    //       icon: "pi pi-fw pi-home",
    //       to: "/dashboard-e-commerce",
    //     },
    //     {
    //       label: "Banking",
    //       icon: "pi pi-fw pi-image",
    //       to: "/dashboard-banking",
    //     },
    //   ],
    // },
    {
      label: "Mantenedores",
      icon: "pi pi-th-large",
      items: [
        {
          label: "Productos",
          icon: "pi pi-fw pi-box",
          to: "/maintainers/sku",
        },
        {
          label: "Usuarios",
          icon: "pi pi-fw pi-users",
          to: "/maintainers/users",
        },
      ],
    },
    {
      label: "Reportes",
      icon: "pi pi-th-large",
      items: [],
    },
    {
      label: "Visualización",
      icon: "pi pi-th-large",
      items: [],
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
