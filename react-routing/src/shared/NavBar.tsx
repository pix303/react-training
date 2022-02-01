import React from "react";
import { NavLink } from "react-router-dom";
import LoggedGuard from "./LoggedGuard";

function NavBar() {
  function setActive({ isActive }: { isActive: boolean }): string {
    return isActive
      ? "btn btn-primary bg-orange-500 hover:bg-orange-400"
      : "btn btn-primary";
  }
  return (
    <div className="bg-slate-100 flex space-x-4 items-baseline p-5">
      <p>App RR6</p>
      <NavLink to="home" className={setActive}>
        Home
      </NavLink>
      <NavLink to="catalog" className={setActive}>
        Catalog
      </NavLink>
      <LoggedGuard>
        <NavLink to="admin" className={setActive}>
          Admin
        </NavLink>
      </LoggedGuard>
    </div>
  );
}

export default NavBar;
