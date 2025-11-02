import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-column subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-column contact">
          {/* --- CHANGED --- */}
          <h3>CALL US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="currency-title">CURRENCY</h3>
          <p className="currency-info">
            <img src="https://flagcdn.com/us.svg" width="20" alt="USA Flag" />
            <span>USD</span>
          </p>
          <span className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</span>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>mettā muse</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <h3 className="payment-title">mettā muse ACCEPTS</h3>
          {/* --- CHANGED --- */}
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_logo.svg/1200px-Mastercard_logo.svg.png" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="Amex" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Pay_logo.svg/1280px-Google_Pay_logo.svg.png" alt="Google Pay" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;