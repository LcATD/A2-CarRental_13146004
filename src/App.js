import logo from "./logo.png";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Grocery } from "./pages/grocery";
import { Fresh } from "./pages/fresh";
import { Meat } from "./pages/meat";
import { Dairy } from "./pages/dairy";
import { Frozen } from "./pages/frozen";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" width="80" height="40" />™
        </a>
        {/* Nav Bar */}
        <nav class="navbar">
          <div class="dropdown">
            <div class="dropdown-button">Grocery</div>
            <div class="dropdown-items">
              <a href="/grocery#beverage">Beverage</a>
              <a href="/grocery#snack">Snack</a>
              <a href="/grocery#condiment">Condiment</a>
              <a href="/grocery#pet">Pet</a>
              <a href="/grocery#laundry">Laundry</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Fresh</div>
            <div class="dropdown-items">
              <a href="/fresh#vegetable">Vegetable</a>
              <a href="/fresh#fruit">Fruit</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Meat</div>
            <div class="dropdown-items">
              <a href="/meat#poultry">Poultry</a>
              <a href="/meat#beef">Beef</a>
              <a href="/meat#pork">Pork</a>
              <a href="/meat#vegan">Vegan</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Dairy</div>
            <div class="dropdown-items">
              <a href="/dairy#milk">Milk</a>
              <a href="/dairy#yogurt">Yogurt</a>
              <a href="/dairy#non-dairy">Non-dairy milk</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Frozen</div>
            <div class="dropdown-items">
              <a href="/frozen#frozen-veg">Frozen Vegetable</a>
              <a href="/frozen#frozen-food">Frozen Food</a>
              <a href="/frozen#dessert">Dessert</a>
            </div>
          </div>
        </nav>
        {/* Search Bar */}
        <form>
          <input
            type="text"
            placeholder="Search products..."
            style={{ width: "20rem", height: "2rem" }}
          />
        </form>
      </header>
      <Routes>
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/meat" element={<Meat />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/frozen" element={<Frozen />} />
      </Routes>
    </div>
  );
}

export default App;
