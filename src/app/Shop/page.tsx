"use client";
import React from "react";
import "./shop.css";
import Navbar from "../components1/Navbar"
import Footer from "../components1/Footer"

type Product = {
  name: string;
  price: string;
  type: string;
  tag?: "NEW" | "TOP SELLER";
  image: string;
};

const products: Product[] = [
  {
    name: "GLOCK 19 GEN 5",
    price: "₹85,000",
    type: "9mm, Semi-Auto, 15 rounds",
    tag: "NEW",
    image: "/images/glock19.png",
  },
  {
    name: "S&W MODEL 686",
    price: "₹1,25,000",
    type: ".357 Magnum, 6 rounds",
    tag: "TOP SELLER",
    image: "/images/s&w686.png",
  },
  {
    name: "SIG P320 COMPACT",
    price: "₹85,000",
    type: "9mm, Semi-Auto, 12 rounds",
    image: "/images/sigp320.png",
  },
  {
    name: "BERETTA 92FS",
    price: "₹78,000",
    type: "9mm, Semi-Auto, 15 rounds",
    image: "/images/beretta92fs.png",
  },
  {
    name: "AR-15 TACTICAL",
    price: "₹2,85,000",
    type: "5.56/.223, Semi-Auto, 30 rounds",
    tag: "NEW",
    image: "/images/ar15.png",
  },
  {
    name: "REMINGTON 870",
    price: "₹65,000",
    type: "12 Gauge, Pump-action, 5 rounds",
    image: "/images/remington870.png",
  },
];

const Page: React.FC = () => {
  return (
    <div> 
      <Navbar/>
    <div className="shop-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>FILTERS</h3>

        <div className="filter-group">
          <strong>Brand</strong>
          <label>
            <input type="checkbox" /> Glock
          </label>
          <label>
            <input type="checkbox" /> Smith & Wesson
          </label>
          <label>
            <input type="checkbox" /> Sig Sauer
          </label>
        </div>

        <div className="filter-group">
          <strong>Type</strong>
          <button className="pill">Pistol</button>
          <button className="pill">Rifle</button>
          <button className="pill">Shotgun</button>
        </div>

        <div className="filter-group">
          <strong>Price Range</strong>
          <input type="text" placeholder="Min" />
          <input type="text" placeholder="Max" />
        </div>

        <div className="filter-group">
          <strong>Sort By</strong>
          <select>
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </aside>

      {/* Content */}
      <main className="content">
        <h2>FIREARMS COLLECTION</h2>

        <div className="product-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              {product.tag && (
                <span
                  className={`tag ${
                    product.tag === "NEW" ? "new" : "top"
                  }`}
                >
                  {product.tag}
                </span>
              )}
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.type}</p>
              <h3>{product.price}</h3>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>7</span>
        </div>
      </main>
    </div>
    <Footer/>
    </div>
  );
};

export default Page;
