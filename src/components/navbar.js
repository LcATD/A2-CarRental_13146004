import { Button } from "react-bootstrap";
import logo from "../logo.svg";
import { useShoppingCart } from "../contexts/shoppingCartContext";
import storeItems from "../data/groceryData.json";

export function Navbar() {
  const { openCart, cartQty } = useShoppingCart();

  const subcategoryCounts = storeItems.reduce((acc, item) => {
    const { subCategory } = item;
    if (subCategory in acc) {
      acc[subCategory]++;
    } else {
      acc[subCategory] = 1;
    }
    return acc;
  }, {});

  //[Debug] console.log(subcategoryCounts);

  return (
    <>
      <a href="/" className="logo">
        <img src={logo} alt="logo" width="200" height="80" />
      </a>
      <nav className="navbar">
        <div className="dropdown">
          <div className="dropdown-button">Grocery</div>
          <div className="dropdown-items">
            <a
              className={
                subcategoryCounts.Beverage === undefined ? "disabled" : ""
              }
              href="/grocery#beverage"
            >
              Beverage &#40;{subcategoryCounts.Beverage || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Snack === undefined ? "disabled" : ""
              }
              href="/grocery#snack"
            >
              Snack &#40;{subcategoryCounts.Snack || 0}&#41;
            </a>
            <a href="/grocery#condiment">
              Condiment &#40;{subcategoryCounts.Condiment || 0}&#41;
            </a>
            <a
              className={subcategoryCounts.Pet === undefined ? "disabled" : ""}
              href={"/grocery#pet"}
            >
              Pet &#40;{subcategoryCounts.Pet || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Laundry === undefined ? "disabled" : ""
              }
              href="/grocery#laundry"
            >
              Laundry &#40;{subcategoryCounts.Laundry || 0}&#41;
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">Fresh</div>
          <div className="dropdown-items">
            <a
              className={
                subcategoryCounts.Vegetable === undefined ? "disabled" : ""
              }
              href="/fresh#vegetable"
            >
              Vegetable &#40;{subcategoryCounts.Vegetable || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Fruit === undefined ? "disabled" : ""
              }
              href="/fresh#fruit"
            >
              Fruit &#40;{subcategoryCounts.Fruit || 0}&#41;
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">Meat</div>
          <div className="dropdown-items">
            <a
              className={
                subcategoryCounts.Poultry === undefined ? "disabled" : ""
              }
              href="/meat#poultry"
            >
              Poultry &#40;{subcategoryCounts.Poultry || 0}&#41;
            </a>
            <a
              className={subcategoryCounts.Beef === undefined ? "disabled" : ""}
              href="/meat#beef"
            >
              Beef &#40;{subcategoryCounts.Beef || 0}&#41;
            </a>
            <a
              className={subcategoryCounts.Pork === undefined ? "disabled" : ""}
              href="/meat#pork"
            >
              Pork &#40;{subcategoryCounts.Pork || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Vegan === undefined ? "disabled" : ""
              }
              href="/meat#vegan"
            >
              Vegan &#40;{subcategoryCounts.Vegan || 0}&#41;
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">Dairy</div>
          <div className="dropdown-items">
            <a
              className={subcategoryCounts.Milk === undefined ? "disabled" : ""}
              href="/dairy#milk"
            >
              Milk &#40;{subcategoryCounts.Milk || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Yogurt === undefined ? "disabled" : ""
              }
              href="/dairy#yogurt"
            >
              Yogurt &#40;{subcategoryCounts.Yogurt || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.NonDairyMilk === undefined ? "disabled" : ""
              }
              href="/dairy#non-dairy"
            >
              Non-dairy milk &#40;{subcategoryCounts.NonDairyMilk || 0}&#41;
            </a>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown-button">Frozen</div>
          <div className="dropdown-items">
            <a
              className={
                subcategoryCounts.FrozenVeg === undefined ? "disabled" : ""
              }
              href="/frozen#frozen-veg"
            >
              Frozen Vegetable &#40;{subcategoryCounts.FrozenVeg || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.FrozenFood === undefined ? "disabled" : ""
              }
              href="/frozen#frozen-food"
            >
              Frozen Food &#40;{subcategoryCounts.FrozenFood || 0}&#41;
            </a>
            <a
              className={
                subcategoryCounts.Dessert === undefined ? "disabled" : ""
              }
              href="/frozen#dessert"
            >
              Dessert &#40;{subcategoryCounts.Dessert || 0}&#41;
            </a>
          </div>
        </div>
      </nav>
      <Button
        onClick={openCart}
        style={{
          width: "2.7rem",
          height: "2.7rem",
          position: "relative",
          visibility: cartQty === 0 ? "hidden" : "visible",
        }}
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
        <div
          className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "translate(25%, 25%)",
          }}
        >
          {cartQty}
        </div>
      </Button>
    </>
  );
}
