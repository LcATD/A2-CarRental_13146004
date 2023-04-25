import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Grocery() {
  return (
    <>
      <h1 class="body">Grocery</h1>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Beverage
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items.map((item) => (
          <Col>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
