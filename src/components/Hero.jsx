import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-kicker">Real Estate like never before!</p>

          <h1 className="hero-title">
            Find your next{" "}
            <span className="hero-highlight">
              home, apartment or duplex.
            </span>
          </h1>

          <p className="hero-description">
            Browse verified listings for rent and sale.
            Built as a React demo to showcase clean UI, filters and responsive
            layouts.
          </p>

          <ul className="hero-list">
            <li>• Rent and sale listings</li>
            <li>• Filters for price and property type</li>
            <li>• Mobile-first layout with custom CSS</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-preview-card">
            <div className="hero-preview-inner">
              <div className="hero-preview-text">
                <p className="hero-preview-kicker">
                  Real estate listing UI
                </p>
                <p className="hero-preview-title">
                  Built with React & CSS
                </p>
                <p className="hero-preview-note">
  A smart real estate platform built for fast property discovery and seamless browsing.
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
