import Link from 'next/link';
import '../LP.css';

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo">KATHURIA GUN HOUSE</div>
      <nav>
        <a href="#">HANDGUNS</a>
        <a href="#">RIFLES</a>
        <a href="#">AMMUNITION</a>
        <a href="#">ACCESSORIES</a>
      </nav>
    </header>
  );
}
