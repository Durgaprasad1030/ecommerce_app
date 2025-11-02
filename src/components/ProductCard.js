import React from 'react';

/**
 * A single product card.
 * @param {object} props
 * @param {object} props.product - The product data to display.
 */
function ProductCard({ product }) {
  // Generate a short description, truncate if necessary
  // const shortDescription = product.description.substring(0, 100) + '...';
  
  // Create the JSON-LD schema for SEO
  const schema = {
    // ... (schema object remains the same)
     "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "FakeStore"
    },
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": typeof window !== 'undefined' ? window.location.href : '', 
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  return (
    <article className="product-card">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} // SEO-friendly alt text
          className="product-image"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400?text=Image+Not+Found" }}
        />
        {/* --- REMOVED "ADD TO CART" BUTTON --- */}
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <div className="product-meta">
          {/* --- CHANGED --- */}
          <p className="product-signin">Sign in or Create an account to see pricing</p>
          <button className="wishlist-btn"><i className="fa-regular fa-heart"></i></button>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}

export default ProductCard;