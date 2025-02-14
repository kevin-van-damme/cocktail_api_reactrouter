import { type ReactNode } from "react";
import { Link, NavLink } from "react-router";

type PropTypes = {
  children: ReactNode;
};
const Layout = ({ children }: PropTypes) => {
  return (
    <>
      <header>
        <Link to="/">
          <img className="logo" src="./logo.png" alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                HOME
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/drinks/">PRODUCTS</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Come and visit us at ...</footer>
    </>
  );
};
export default Layout;
