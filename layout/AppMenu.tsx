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
        {
          label: "Organismos",
          icon: "pi pi-fw pi-building",
          to: "/maintainers/organism",
        },
      ],
    },
    {
      label: "Reportes",
      icon: "pi pi-th-large",
      items: [
        {
          label: "Lotes",
          icon: "pi pi-fw pi-inbox",
          to: "/reports/lotes",
        },
        {
          label: "Inspecciones",
          icon: "pi pi-fw pi-file-edit",
          to: "/reports/inspections",
        },
        {
          label: "Productos",
          icon: "pi pi-fw pi-box",
          to: "/reports/products",
        },
        {
          label: "SLI",
          icon: "pi pi-fw pi-info-circle",
          to: "/reports/sli",
        },
        {
          label: "Externos",
          icon: "pi pi-fw pi-user-plus",
          to: "/reports/externals",
        },
      ],
    },
    {
      label: "Visualización",
      icon: "pi pi-th-large",
      items: [
        {
          label: "Lotes certificacables con SLI",
          icon: "pi pi-fw pi-info-circle",
          to: "/visualations/lotes-cert-sli",
        },
        {
          label: "Estados de lotes",
          icon: "pi pi-fw pi-info-circle",
          to: "/visualations/lotes-status",
        },
      ],
    },
  ];

  return <AppSubMenu model={model} />;
};

export default AppMenu;
