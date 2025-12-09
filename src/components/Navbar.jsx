import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <div className="navbar-brand">
          <div className="navbar-logo">MH</div>
          <div>
            <p className="navbar-title">MeliteHomes</p>
            <p className="navbar-subtitle">Real estate listings</p>
          </div>
        </div>

        <p className="navbar-tagline">
          React real estate UI • Portfolio demo
        </p>
      </nav>
    </header>
  );
}

export default Navbar;
