import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Dairy() {
  return (
    <>
      <h1 className="body">Dairy</h1>
      <h3
        className="body"
        id="milk"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Milk
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Milk")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        className="body"
        id="yogurt"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Yogurt
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Yogurt")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        className="body"
        id="non-dairy"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Non-dairy milk
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Non-dairy milk")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
