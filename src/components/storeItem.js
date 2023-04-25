import { Card, Button } from "react-bootstrap";

export function StoreItem({ name, price, inStock, link }) {
  const qty = 1;
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
              {price}
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
              >
                + Add to Cart
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
                  <Button>-</Button>
                  <div>
                    <span className="fs-4">{qty}</span> &nbsp;in cart
                  </div>
                  <Button>+</Button>
                </div>
                <Button variant="danger" size="sm">
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
