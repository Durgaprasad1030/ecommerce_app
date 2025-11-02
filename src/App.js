import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ add this line
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Global styles
import './styles/app.css';
import './styles/responsive.css';

/**
 * Root Application Component
 * @param {object} props
 * @param {Array} props.products - The initial list of products (from SSR or fetched client-side)
 */
function App({ products = [] }) {
  return (
    <div className="App">
      <Header />
      <Home products={products} />
      <Footer />
    </div>
  );
}

export default App;
