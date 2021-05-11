import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Menu Principal",
    to: "/dashboard",
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Avaliações"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Pesquisa",
    to: "/periodics",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Gerenciamento de Conteúdo"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Graficos",
    to: "/charts",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Remedios",
    to: "/medicines",
    icon: "cil-bell",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Dietas",
    to: "/menus",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Duvidas",
    to: "/questions",
    icon: "cil-speech",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
