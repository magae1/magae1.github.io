import { Outlet } from "react-router";

import HeaderWrapper from "../components/HeaderWrapper.tsx";
import HeaderNavLink from "../components/HeaderNavLink.tsx";
import ThemeToggleButton from "../components/ThemeToggleButton.tsx";

export default function RootLayout() {
  return (
    <>
      <HeaderWrapper>
        <div className="w-full flex justify-center">
          <div className="join bg-base-300 p-1 rounded-lg">
            <HeaderNavLink to="/" label="HOME" />
          </div>
        </div>
      </HeaderWrapper>
      <Outlet />
      <div className="sticky bottom-0">
        <div className="absolute bottom-5 right-5">
          <div className="tooltip" data-tip="테마 변경">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </>
  );
}
