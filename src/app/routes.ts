import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { FullMenu } from "./components/FullMenu";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: FullMenu },
    ],
  },
]);
