import { useState } from "react";
import "./PropertyGrid.css";
import properties from "../data/properties";

function formatPrice(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

function PropertyGrid({ filters }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const filtered = properties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;

    if (filters.search) {
      const term = filters.search.toLowerCase();
      const inTitle = p.title.toLowerCase().includes(term);
      const inLocation = p.location.toLowerCase().includes(term);
      if (!inTitle && !inLocation) return false;
    }

    return true;
  });

  const closeModal = () => {
    setSelectedProperty(null);
    setSliderIndex(0);
  };

  return (
    <section className="properties-section">
      <div className="properties-container">
        <div className="properties-header">
          <h2>Available properties</h2>
          <p>
            Showing {filtered.length} of {properties.length} listings
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="properties-empty">
            <p>No properties match your filters.</p>
            <p className="properties-empty-sub">
              Try clearing the price or type filters to see more results.
            </p>
          </div>
        ) : (
          <div className="properties-grid">
            {filtered.map((p) => (
              <article className="property-card" key={p.id}>
                <div className="property-image-wrapper">
                  {/* Use first image in the array as thumbnail */}
                  <img
                    src={p.images && p.images.length > 0 ? p.images[0] : ""}
                    alt={p.title}
                    className="property-image"
                  />
                  <div
                    className={`property-badge property-badge-${p.type}`}
                  >
                    {p.type === "rent" ? "For Rent" : "For Sale"}
                  </div>
                </div>

                <div className="property-body">
                  <div className="property-meta">
                    <span className="property-size">{p.size}</span>
                  </div>

                  <h3 className="property-title">{p.title}</h3>
                  <p className="property-location">{p.location}</p>

                  <p className="property-price">
                    {formatPrice(p.price)}
                    {p.type === "rent" && (
                      <span className="property-price-period"> / year</span>
                    )}
                  </p>

                  <div className="property-stats">
                    <span>{p.beds} beds</span>
                    <span>{p.baths} baths</span>
                  </div>

                  <button
                    className="property-button"
                    onClick={() => {
                      setSelectedProperty(p);
                      setSliderIndex(0);
                    }}
                  >
                    View details →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Details modal */}
      {selectedProperty && (
        <div className="property-modal-backdrop" onClick={closeModal}>
          <div
            className="property-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="property-modal-close" onClick={closeModal}>
              ✕
            </button>

            {/* Image slider */}
            <div className="property-slider">
              <img
                src={
                  selectedProperty.images &&
                  selectedProperty.images.length > 0
                    ? selectedProperty.images[sliderIndex]
                    : ""
                }
                alt={selectedProperty.title}
                className="property-modal-image"
              />

              {selectedProperty.images && selectedProperty.images.length > 1 && (
                <>
                  <button
                    className="slider-btn slider-prev"
                    onClick={() =>
                      setSliderIndex((prev) =>
                        prev === 0
                          ? selectedProperty.images.length - 1
                          : prev - 1
                      )
                    }
                  >
                    ‹
                  </button>

                  <button
                    className="slider-btn slider-next"
                    onClick={() =>
                      setSliderIndex((prev) =>
                        prev === selectedProperty.images.length - 1
                          ? 0
                          : prev + 1
                      )
                    }
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <div className="property-modal-body">
              <div className="property-modal-tag-row">
                <span
                  className={`property-badge property-badge-${selectedProperty.type}`}
                >
                  {selectedProperty.type === "rent" ? "For Rent" : "For Sale"}
                </span>
                <span className="property-size">
                  {selectedProperty.size}
                </span>
              </div>

              <h3 className="property-modal-title">
                {selectedProperty.title}
              </h3>
              <p className="property-location">
                {selectedProperty.location}
              </p>

              <p className="property-price">
                {formatPrice(selectedProperty.price)}
                {selectedProperty.type === "rent" && (
                  <span className="property-price-period"> / year</span>
                )}
              </p>

              <div className="property-stats">
                <span>{selectedProperty.beds} beds</span>
                <span>{selectedProperty.baths} baths</span>
              </div>

              <p className="property-modal-note">
                This is a demo real estate UI built with React. In a real
                application, this section could show more details like amenities,
                nearby landmarks, agent contact, and a schedule-a-visit form.
              </p>

              <button
                className="property-modal-contact"
                onClick={() =>
                  alert("Demo only: this would contact the agent in a real app.")
                }
              >
                Contact agent
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PropertyGrid;
