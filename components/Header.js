import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link href="/">
          <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img
              src="https://avatars.githubusercontent.com/u/97225946?v=4"
              height={50}
              className="rounded-circle"
              alt="memecat"
            />
            <h4>
              <span className="logo-e">E</span>-Shop
            </h4>
          </a>
        </Link>

        <div className="col-md-4 text-end me-5 mx-5">
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <Link href="/cart">
              <a type="button" className="btn btn-outline-success m-3">
                Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart mx-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            </Link>

            {!user ? (
              <Link href="/api/auth/login">
                <a type="button" className="btn btn-primary m-2">
                  Login
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </a>
              </Link>
            ) : (
              <div className="flex-shrink-0 dropdown m-3">
                <a
                  className="d-block link-dark text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={user?.picture}
                    alt="mdo"
                    width="40"
                    height="40"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small shadow">
                  {user.role && user.role[0] === "admin" && (
                    <li>
                      <Link href="/admin">
                        <a className="dropdown-item">Admin</a>
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link href="/profile">
                      <a className="dropdown-item">Profile</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/cart">
                      <a className="dropdown-item">Cart</a>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link href="/api/auth/logout">
                      <a className="dropdown-item">Sign out</a>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
