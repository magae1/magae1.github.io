import { NavLink, To } from "react-router";

interface Props {
  to: To;
  label: string;
}

export default function HeaderNavLink(props: Props) {
  const { to, label } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isActive ? "btn-accent" : "",
          isPending || isTransitioning ? "btn-disabled" : "",
          "btn join-item",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}
