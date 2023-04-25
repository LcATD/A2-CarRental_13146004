import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Frozen() {
  return (
    <>
      <h1 class="body">Frozen</h1>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Frozen Vegetable
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Frozen vegetable")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Frozen Food
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Frozen food")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Dessert
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Dessert")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
