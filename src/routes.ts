import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [{ index: true, Component: Home }],
  },
]);
