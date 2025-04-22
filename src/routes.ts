import { createBrowserRouter } from "react-router";

import RootLayout from "./layouts/RootLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import TalkPage from "./pages/TalkPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/talk",
        Component: TalkPage,
      },
    ],
  },
]);
