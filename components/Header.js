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
