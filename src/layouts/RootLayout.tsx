import { Outlet } from "react-router";

import HeaderWrapper from "../components/HeaderWrapper.tsx";
import HeaderNavLink from "../components/HeaderNavLink.tsx";
import ThemeToggleButton from "../components/ThemeToggleButton.tsx";

export default function RootLayout() {
  return (
    <>
      <HeaderWrapper>
        <div className="w-full flex justify-center">
          <div role="tablist" className="tabs tabs-box">
            <HeaderNavLink to="/" label="HOME" role="tab" />
          </div>
        </div>
      </HeaderWrapper>
      <Outlet />
      <div className="sticky bottom-0">
        <div className="absolute bottom-5 right-5">
          <div className="tooltip" data-tip="theme">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </>
  );
}
