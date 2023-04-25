import { Button } from "react-bootstrap";
import logo from "../logo.png";

export function Navbar() {
  return (
    <>
      <a href="/" className="logo">
        <img src={logo} alt="logo" width="80" height="40" />™
      </a>
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
      <form class="searchForm">
        <input
          type="text"
          placeholder="Search products..."
          style={{ width: "20rem", height: "2rem" }}
        />
      </form>
      <Button
        style={{ width: "2.7rem", height: "2.7rem" }}
        variant="outline-primary"
        className="rounded-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </Button>
    </>
  );
}
