import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";

export function Checkout() {
  return (
    <>
      <h1 className="body">Checkout</h1>
      <h3 className="body" style={{ marginTop: "-5rem", marginBottom: "2rem" }}>
        Please complete your order form
      </h3>
    </>
  );
}
