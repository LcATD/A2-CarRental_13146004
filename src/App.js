import logo from "./logo.png";
import "./App.css";

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
              <a href="#beverage">Beverage</a>
              <a href="#snack">Snack</a>
              <a href="#condiment">Condiment</a>
              <a href="#pet">Pet</a>
              <a href="#laundry">Laundry</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Fresh</div>
            <div class="dropdown-items">
              <a href="#vegetable">Vegetable</a>
              <a href="#fruit">Fruit</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Meat</div>
            <div class="dropdown-items">
              <a href="#poultry">Poultry</a>
              <a href="#beef">Beef</a>
              <a href="#pork">Pork</a>
              <a href="#vegan">Vegan</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Dairy</div>
            <div class="dropdown-items">
              <a href="#milk">Milk</a>
              <a href="#yogurt">Yogurt</a>
              <a href="#non-dairy">Non-dairy milk</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="dropdown-button">Frozen</div>
            <div class="dropdown-items">
              <a href="#frozen-veg">Frozen Vegetable</a>
              <a href="#frozen-food">Frozen Food</a>
              <a href="#dessert">Dessert</a>
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
    </div>
  );
}

export default App;
