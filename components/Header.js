import React from "react";

const Header = () => {
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

          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
