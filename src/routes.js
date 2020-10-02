import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    component: lazy(() => import("./Pages/HomePage/HomePage")),
  },
  {
    path: "/contacts",
    label: "Contacts",
    component: lazy(() => import("./Pages/ContactPage/ContactPage")),
  },
];
