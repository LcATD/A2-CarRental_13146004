import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/shoppingCartContext";
import { CartItem } from "../components/cartItem";
import storeItems from "../data/groceryData.json";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.name === cartItem.name);
    return total + (item?.price || 0) * cartItem.qty;
  }, 0);
  const handleClick = () => {
    window.location.href = "/checkout";
  };
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div
          className="cart-items-container"
          style={{ maxHeight: "80%", overflowY: "auto" }}
        >
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}
          </Stack>
        </div>
        <div
          className="d-flex justify-content-end fw-bold fs-5"
          style={{ visibility: totalPrice === 0 ? "hidden" : "visible" }}
        >
          Total: ${totalPrice.toFixed(2)}
        </div>
        <div
          className="d-flex justify-content-center position-absolute bottom-0 w-100 pb-3"
          style={{ visibility: totalPrice === 0 ? "hidden" : "visible" }}
        >
          <Button
            variant="outline-success"
            size="md"
            onClick={handleClick}
            //hide when already on checkout page
            style={{
              visibility:
                window.location.pathname === "/checkout" ? "hidden" : "visible",
            }}
          >
            Checkout
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
