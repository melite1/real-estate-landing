import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import PropertyGrid from "./components/PropertyGrid";
import Footer from "./components/Footer";

function App() {
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    search: "", 
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Filters filters={filters} onChange={setFilters} />
        <PropertyGrid filters={filters} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
