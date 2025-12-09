import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">
          © {new Date().getFullYear()} MeliteHomes
        </p>

        <p className="footer-sub">
          A modern real estate demo built with React.
        </p>

        <p className="footer-tech">
          Built with React, Vite & plain CSS.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
