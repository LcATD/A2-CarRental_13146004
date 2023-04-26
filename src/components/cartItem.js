import { useShoppingCart } from "../contexts/shoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/groceryData.json";

export function CartItem({ name, qty }) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.name === name);
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
              {item.name}
              {qty > 1 && (
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  &nbsp;x{qty}
                </span>
              )}
            </div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              ${item.price}
            </div>
          </div>
          <div>${(item.price * qty).toFixed(2)}</div>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeFromCart(item.name)}
          >
            ×
          </Button>
        </Stack>
      </>
    );
}
