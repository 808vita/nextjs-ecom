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

        <div className="col-md-3 text-end me-5 mx-5">
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
              <a
                href="/api/auth/login"
                type="button"
                className="btn btn-primary me-2"
              >
                Login
              </a>
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
                    <a className="dropdown-item" href="/api/auth/logout">
                      Sign out
                    </a>
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
