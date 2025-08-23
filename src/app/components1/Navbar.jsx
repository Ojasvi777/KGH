import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">KATHURIA GUN HOUSE</div>

      {/* Links */}
      <nav className="nav-links">
        <Link href="#">HANDGUNS</Link>
        <Link href="#">RIFLES</Link>
        <Link href="#">AMMUNITION</Link>
        <Link href="#">ACCESSORIES</Link>
      </nav>

      {/* Icons */}
      <div className="nav-icons">
        <FaSearch className="icon" title="Search" />
        <div className="cart-icon">
          <Link href="/Cart"><FaShoppingCart className="icon" title="Cart" /></Link>
          <span className="cart-count">2</span>
        </div>
        <FaUser className="icon" title="Profile" />
      </div>
    </header>
  );
}
