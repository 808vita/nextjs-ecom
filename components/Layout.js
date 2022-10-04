const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center mx-3 border-bottom ">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
