import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; 2024 Online Advertising Management System. All rights reserved.</p>
        <p>Address: KL University, Vijayawada</p>
        <p>Email: info@examplehotel.com | RegNo:- 2200032089, 2200031162, 2200032833</p>
      </div>
      {/* <div className="subscribe-panel">
        <h4>Subscribe to Our Newsletter</h4>
        <p>Stay updated with our latest offers and promotions.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div> */}
    </footer>
  )
}
