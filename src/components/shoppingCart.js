import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/shoppingCartContext";
import { CartItem } from "../components/cartItem";
import storeItems from "../data/cars.json";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.model === cartItem.model);
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
              <CartItem key={item.model} {...item} />
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
          style={{
            //Hide when cart is empty, or already on the checkout page
            visibility:
              totalPrice === 0 || window.location.href.includes("/checkout")
                ? "hidden"
                : "visible",
          }}
        >
          <Button variant="outline-success" size="md" onClick={handleClick}>
            Checkout
          </Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
