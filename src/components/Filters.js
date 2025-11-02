import React, { useState, useEffect } from 'react'; // <-- 1. IMPORT useEffect

/**
 * A single collapsible filter section.
 */
const FilterSection = ({ title, children, isOpen, onToggle }) => (
  <div className="filter-section">
    <div className="filter-section-header" onClick={onToggle}>
      <span>{title}</span>
      <i className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
    </div>
    <div className={`filter-section-content ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  </div>
);

/**
 * Filters Sidebar Component
 * Handles all filter sections dynamically.
 */
function Filters({
  categories = [],
  selectedCategory,
  onCategoryChange,
  onFilterChange,
  className = ''
}) {
  // State for which section is open
  const [openSection, setOpenSection] = useState('IDEAL FOR');

  // State for all selected filters
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: []
  });

  // --- 2. ADD THIS useEffect HOOK ---
  // This hook watches the local 'filters' state.
  // When 'filters' changes, it notifies the parent component.
  useEffect(() => {
    onFilterChange?.(filters);
  }, [filters, onFilterChange]);
  // ---------------------------------

  // Toggles which section is open
  const handleToggle = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  // Handles checkbox selection for any filter category
  const handleCheckboxChange = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const isSelected = currentValues.includes(value);

      const updatedValues = isSelected
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      // 3. REMOVE onFilterChange from here
      return { ...prev, [filterType]: updatedValues };
    });
  };

  // Handles simple boolean toggle (like customizable)
  const handleBooleanChange = (filterType) => {
    setFilters((prev) => {
      // 3. REMOVE onFilterChange from here
      return { ...prev, [filterType]: !prev[filterType] };
    });
  };

  // Handles unselect all (for a given filterType)
  const handleUnselectAll = (filterType) => {
    setFilters((prev) => {
      // 3. REMOVE onFilterChange from here
      return { ...prev, [filterType]: [] };
    });
  };

  return (
    <aside className={`filters-sidebar ${className}`}>
      {/* --- CUSTOMIZABLE --- */}
      <div className="filter-section">
        <div className="filter-section-content open" style={{ maxHeight: 'none', paddingBottom: 0 }}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.customizable}
              onChange={() => handleBooleanChange('customizable')}
            />{' '}
            CUSTOMIZABLE
          </label>
        </div>
      </div>

      {/* --- IDEAL FOR --- */}
      <FilterSection
        title="IDEAL FOR"
        isOpen={openSection === 'IDEAL FOR'}
        onToggle={() => handleToggle('IDEAL FOR')}
      >
        <a href="#" className="unselect-all" onClick={(e) => { e.preventDefault(); handleUnselectAll('idealFor'); }}>
          Unselect all
        </a>
        <div className="filter-list-checkbox">
          {['Men', 'Women', 'Baby & Kids'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.idealFor.includes(opt)}
                onChange={() => handleCheckboxChange('idealFor', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- CATEGORY --- */}
      <FilterSection
        title="CATEGORY"
        isOpen={openSection === 'CATEGORY'}
        onToggle={() => handleToggle('CATEGORY')}
      >
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => onCategoryChange(category)}
              >
                {category.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* --- OCCASION --- */}
      <FilterSection
        title="OCCASION"
        isOpen={openSection === 'OCCASION'}
        onToggle={() => handleToggle('OCCASION')}
      >
        <div className="filter-list-checkbox">
          {['Casual', 'Party', 'Formal', 'Wedding'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.occasion.includes(opt)}
                onChange={() => handleCheckboxChange('occasion', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- WORK --- */}
      <FilterSection
        title="WORK"
        isOpen={openSection === 'WORK'}
        onToggle={() => handleToggle('WORK')}
      >
        <div className="filter-list-checkbox">
          {['Printed', 'Embroidered', 'Woven'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.work.includes(opt)}
                onChange={() => handleCheckboxChange('work', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- FABRIC --- */}
      <FilterSection
        title="FABRIC"
        isOpen={openSection === 'FABRIC'}
        onToggle={() => handleToggle('FABRIC')}
      >
        <div className="filter-list-checkbox">
          {['Cotton', 'Silk', 'Linen', 'Polyester'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.fabric.includes(opt)}
                onChange={() => handleCheckboxChange('fabric', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- SEGMENT --- */}
      <FilterSection
        title="SEGMENT"
        isOpen={openSection === 'SEGMENT'}
        onToggle={() => handleToggle('SEGMENT')}
      >
        <div className="filter-list-checkbox">
          {['Luxury', 'Budget', 'Premium'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.segment.includes(opt)}
                onChange={() => handleCheckboxChange('segment', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- SUITABLE FOR --- */}
      <FilterSection
        title="SUITABLE FOR"
        isOpen={openSection === 'SUITABLE FOR'}
        onToggle={() => handleToggle('SUITABLE FOR')}
      >
        <div className="filter-list-checkbox">
          {['Summer', 'Winter', 'All Seasons'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.suitableFor.includes(opt)}
                onChange={() => handleCheckboxChange('suitableFor', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- RAW MATERIALS --- */}
      <FilterSection
        title="RAW MATERIALS"
        isOpen={openSection === 'RAW MATERIALS'}
        onToggle={() => handleToggle('RAW MATERIALS')}
      >
        <div className="filter-list-checkbox">
          {['Organic Cotton', 'Recycled Polyester', 'Bamboo'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.rawMaterials.includes(opt)}
                onChange={() => handleCheckboxChange('rawMaterials', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>

      {/* --- PATTERN --- */}
      <FilterSection
        title="PATTERN"
        isOpen={openSection === 'PATTERN'}
        onToggle={() => handleToggle('PATTERN')}
      >
        <div className="filter-list-checkbox">
          {['Solid', 'Striped', 'Checked', 'Floral'].map((opt) => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={filters.pattern.includes(opt)}
                onChange={() => handleCheckboxChange('pattern', opt)}
              />{' '}
              {opt}
            </label>
          ))}
        </div>
      </FilterSection>
    </aside>
  );
}

export default Filters;