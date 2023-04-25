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
        {items
          .filter((item) => item.subCategory === "Beverage")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Snack
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Snack")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Condiment
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Condiment")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Pet
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Pet")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3 class="body" style={{ marginTop: "-3rem", marginBottom: "2rem" }}>
        Laundry
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Laundry")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
