import React from 'react';
import ProductCard from './ProductCard';

/**
 * Displays a grid of products.
 * @param {object} props
 * @param {Array} props.products - The list of products to display.
 */
function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <div className="product-list-empty">No products found.</div>;
  }

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
