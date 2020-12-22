// Navigation component that appears across all pages
// used in Layout component
// Role-based redirect is implemented here

import Link from "next/Link";
import { isAuth, logOut } from "../helpers/auth";

const Nav = () => (
  <ul className="nav bg-dark justify-content-between">
    <div className="d-flex">

    <li className="nav-item ">
      <Link href="/">
        <a className="nav-link text-white">Home</a>
      </Link>
    </li>
    <li className="nav-item ">
      <Link href="/user/link/create">
        <a className="btn bg-primary btn-outline-primary text-white">Submit a Link</a>
      </Link>
    </li>
    </div>
    <div className="d-flex ">
      {/* If not logged in display login and register links */}
      {!isAuth() && (
        <>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-white">Login</a>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/register">
              <a className="nav-link text-white">Register</a>
            </Link>
          </li>
        </>
      )}

      {/* If logged in redirect based on role */}

      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item ml-auto ">
          <Link href="/admin">
            <a className="nav-link text-white">{isAuth().name}</a>
          </Link>
        </li>
      )}
      {isAuth() && isAuth().role === "subscriber" && (
        <li className="nav-item ml-auto ">
          <Link href="/user">
            <a className="nav-link text-white">{isAuth().name}</a>
          </Link>
        </li>
      )}
      {/* Only display logout if users are logged in */}
      {isAuth() && (
        <li className="nav-item ">
          <a className="nav-link text-white" onClick={logOut}>
            logout
          </a>
        </li>
      )}
    </div>
  </ul>
);

export default Nav;
