import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/shoppingCartContext";

export function StoreItem({
  model,
  price,
  available,
  link,
  mileage,
  brand,
  category,
  modelYear,
  fuelType,
  seats,
  desc,
}) {
  const {
    cartQty,
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const qty = getItemQuantity(model);

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
            <span className="fs-2">{model}</span>
            <span
              className="ms-2 text-muted"
              style={{ fontSize: "1.5rem", paddingTop: "0.5rem" }}
            >
              ${price.toFixed(2)} / Day
            </span>
          </Card.Title>
          <div className="mt-auto">Brand: {brand}</div>
          <div className="mt-auto">Category: {category}</div>
          <div className="mt-auto">Mileage: {mileage}km</div>
          <div className="mt-auto">Seats: {seats}</div>
          <div className="mt-auto">Model Year: {modelYear}</div>
          <div className="mt-auto">Fuel Type: {fuelType}</div>
          <div className="mt-auto">Description: {desc}</div>
          <div className="mt-auto">
            {qty === 0 ? (
              <Button
                variant="info"
                className="w-100"
                style={{
                  backgroundColor: "#61dafb",
                }}
                onClick={() => increaseItemQuantity(model)}
                //disable if out of stock or reached cart capacity
                disabled={!available || cartQty >= 10}
              >
                {available === true ? "+ Add to Cart" : "Unavailable"}
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
                  <Button onClick={() => decreaseItemQuantity(model)}>-</Button>
                  <div>
                    <span className="fs-4">{qty}</span> &nbsp;Day
                    <span
                      style={{ visibility: qty > 1 ? "visible" : "hidden" }}
                    >
                      s
                    </span>
                  </div>
                  <Button
                    onClick={() => increaseItemQuantity(model)}
                    //Cannot rent a single car more than 360 days
                    //Sum of rent for a single car cannot exceed 10000 dollars
                    //Cart cannot contain more than 10 cars
                    disabled={
                      qty >= 360 ||
                      (qty + 1) * price >= 10000.1 ||
                      cartQty >= 10
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
                  onClick={() => removeFromCart(model)}
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
