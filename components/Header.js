import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
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

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-success me-2">
            Cart
          </button>

          {!user ? (
            <a
              href="/api/auth/login"
              type="button"
              className="btn btn-outline-primary me-2"
            >
              Login
            </a>
          ) : (
            <button type="button" className="btn btn-primary">
              logged options
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
