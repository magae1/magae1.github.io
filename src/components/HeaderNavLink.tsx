import { AriaRole } from "react";
import { NavLink, To } from "react-router";

interface Props {
  to: To;
  label: string;
  role?: AriaRole;
}

export default function HeaderNavLink(props: Props) {
  const { to, label, role } = props;
  return (
    <NavLink
      to={to}
      role={role}
      className={({ isActive }) =>
        [isActive ? "tab-active" : "", "tab"].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}
