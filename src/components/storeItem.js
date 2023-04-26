import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/shoppingCartContext";

export function StoreItem({ name, price, inStock, link }) {
  const {
    cartQty,
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const qty = getItemQuantity(name);

  return (
    <div className="cards">
      <Card className="mb-5 h-100">
        <Card.Img
          variant="top"
          src={link}
          height="200px"
          style={{ objectFit: "contain" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-item-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span
              className="ms-2 text-muted"
              style={{ fontSize: "1.5rem", paddingTop: "0.5rem" }}
            >
              ${price.toFixed(2)}
            </span>
          </Card.Title>
          <div className="mt-auto">
            {qty === 0 ? (
              <Button
                variant="info"
                className="w-100"
                style={{
                  backgroundColor: "#61dafb",
                }}
                onClick={() => increaseItemQuantity(name)}
                //disable if out of stock or reached cart capacity
                disabled={!inStock || cartQty >= 100}
              >
                {inStock === true ? "+ Add to Cart" : "Out of Stock"}
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button onClick={() => decreaseItemQuantity(name)}>-</Button>
                  <div>
                    <span className="fs-4">{qty}</span> &nbsp;in cart
                  </div>
                  <Button
                    onClick={() => increaseItemQuantity(name)}
                    //Cannot purchase a single item more than 20 times
                    //Sum of a single item cannot exceed 100 dollars
                    //Cart cannot contain more than 100 items
                    disabled={
                      qty >= 20 || (qty + 1) * price >= 100 || cartQty >= 100
                        ? true
                        : false
                    }
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(name)}
                >
                  Remove from cart
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
