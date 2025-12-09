import "./Filters.css";

function Filters({ filters, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <section className="filters-section">
      <div className="filters-container">
        <div className="filters-label">
          Filter listings:
        </div>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="filters-field filters-select"
        >
          <option value="">All types</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
        </select>

        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          placeholder="Min price"
          className="filters-field filters-input"
        />

        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          placeholder="Max price"
          className="filters-field filters-input"
        />

        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search by title or location"
          className="filters-field filters-search"
        />
      </div>
    </section>
  );
}

export default Filters;
