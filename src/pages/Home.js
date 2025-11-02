// frontend/pages/Home.js
import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

/**
 * Home page – displays filters + product list.
 */
function Home({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts || []);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({}); // 👈 NEW

  // Fetch products client-side (if SSR didn’t provide them)
  useEffect(() => {
    const fetchClientData = async () => {
      console.log('No initial products, fetching on client...');
      setIsLoading(true);
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log('Client fetch successful:', response.data.length);
        setProducts(response.data);
      } catch (err) {
        console.error('Client-side fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!products || products.length === 0) {
      fetchClientData();
    }
  }, []); // Runs once on mount

  // Compute unique product categories
  const categories = useMemo(() => {
    const allCategories = products.map((p) => p.category);
    return ['all', ...new Set(allCategories)];
  }, [products]);

  // Apply filters + category
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // 1️⃣ Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // 2️⃣ Apply "customizable"
    if (activeFilters.customizable) {
      filtered = filtered.filter((p) => p.title.toLowerCase().includes('custom'));
    }

    // 3️⃣ Example mappings for filters (you can adjust logic as needed)
    if (activeFilters.idealFor?.length) {
      filtered = filtered.filter((p) =>
        activeFilters.idealFor.some((term) =>
          p.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    }

    if (activeFilters.fabric?.length) {
      filtered = filtered.filter((p) =>
        activeFilters.fabric.some((term) =>
          p.description.toLowerCase().includes(term.toLowerCase())
        )
      );
    }

    if (activeFilters.pattern?.length) {
      filtered = filtered.filter((p) =>
        activeFilters.pattern.some((term) =>
          p.title.toLowerCase().includes(term.toLowerCase())
        )
      );
    }

    // You can expand this pattern for other filters (occasion, work, etc.)
    // For now, they’ll be placeholders unless product data contains keywords.

    return filtered;
  }, [products, selectedCategory, activeFilters]);

  return (
    <div className="home-container">
      <div className="page-header">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      {/* --- Filter Bar --- */}
      <div className="filter-bar">
        <div className="filter-controls">
          <button
            className="filter-toggle-mobile"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            FILTER
          </button>

          <span className="filter-item-count">
            {isLoading ? 'LOADING...' : `${filteredProducts.length} ITEMS`}
          </span>

          <button
            className="filter-toggle-desktop"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <i
              className={`fa-solid ${
                isFilterOpen ? 'fa-arrow-left' : 'fa-arrow-right'
              }`}
            ></i>
            {isFilterOpen ? ' HIDE FILTER' : ' SHOW FILTER'}
          </button>
        </div>

        {/* Sort dropdown (you can expand this later) */}
        <div className="sort-controls">
          <select>
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-desc">PRICE : HIGH TO LOW</option>
            <option value="price-asc">PRICE : LOW TO HIGH</option>
          </select>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      {/* --- Main Layout --- */}
      <main className="main-content">
        <Filters
          className={isFilterOpen ? 'open' : ''}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            setIsFilterOpen(false); // Close on mobile
          }}
          onFilterChange={(filters) => {
            console.log('Filters changed:', filters);
            setActiveFilters(filters);
          }}
        />

        {/* Products List */}
        {isLoading ? (
          <div className="product-list-empty">Loading products...</div>
        ) : filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <div className="product-list-empty">No products found.</div>
        )}
      </main>
    </div>
  );
}

export default Home;
