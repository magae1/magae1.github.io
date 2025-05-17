import { Outlet } from "react-router";
import { FaGithub } from "react-icons/fa";

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
            <HeaderNavLink to="/talk" label="TALK" role="tab" />
          </div>
        </div>
      </HeaderWrapper>
      <Outlet />
      <div className="sticky bottom-0">
        <div className="absolute bottom-5 right-5 flex flex-col gap-3">
          <a
            className="btn btn-circle bg-base-300 opacity-60 hover:opacity-100 shadow-lg outline outline-black/5 dark:outline-white/5"
            href="https://github.com/magae1/magae1.github.io"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
          <div className="tooltip" data-tip="theme">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </>
  );
}
