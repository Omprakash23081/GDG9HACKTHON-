function Navbar() {
  return (
    <div className="navstyles">
      <header className="p-3 navstyle text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none size"
            >
              <img src="./public/lobo.jpg" alt="" />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link gapinmanue text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gapinmanue text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gapinmanue text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gapinmanue text-black">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link gapinmanue text-black">
                  About
                </a>
              </li>
            </ul>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
