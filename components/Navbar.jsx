export const Navbar = ({ navIcon, navbarContent, icons, copyright }) => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg sticky-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" target="_blank" href="/">
            {navIcon} Hello Betty
          </a>
          <button
            className="navbar-toggler d-flex d-lg-none order-2 p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-white bg-dark"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {navIcon}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {navbarContent}
              </ul>
              <hr />
              <div className="text-center d-lg-none">
                {icons}
              </div>
              <hr />
              {copyright}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
