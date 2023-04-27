import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Fresh() {
  return (
    <>
      <h1 className="body">Fresh</h1>
      <h3
        className="body"
        id="vegetable"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Vegetable
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Vegetable")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        className="body"
        id="fruit"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Fruit
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Fruit")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
