import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Fresh() {
  return (
    <>
      <h1 class="body">Fresh</h1>
      <h3
        class="body"
        id="vegetable"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Vegetable
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Vegetable")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        class="body"
        id="fruit"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Fruit
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Fruit")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
