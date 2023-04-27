import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Frozen() {
  return (
    <>
      <h1 className="body">Frozen</h1>
      <h3
        className="body"
        id="frozen-veg"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Frozen Vegetable
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Frozen vegetable")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        className="body"
        id="frozen-food"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Frozen Food
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Frozen food")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        className="body"
        id="dessert"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Dessert
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Dessert")
          .map((item) => (
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
