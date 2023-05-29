import { useShoppingCart } from "../contexts/shoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/cars.json";

export function CartItem({ model, qty }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.model === model);
  if (item === null) return null;
  else
    return (
      <>
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex align-items-center"
        >
          <img
            alt=""
            src={item.link}
            style={{ width: "6rem", height: "4rem", objectFit: "contain" }}
          />
          <div className="me-auto">
            <div>
              {item.model}
              {qty > 1 && (
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  &nbsp;{qty}d.
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              ${item.price}/day
            </div>
          </div>
          <div>${(item.price * qty).toFixed(2)}</div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeFromCart(item.model)}
            style={{
              //disable editing on checkout page
              visibility:
                window.location.pathname === "/checkout" ? "hidden" : "visible",
            }}
          >
            ×
          </Button>
        </Stack>
      </>
    );
}
