import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Grocery() {
  return (
    <>
      <h1 className="body">Grocery</h1>
      <h3
        className="body"
        id="beverage"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
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
      <h3
        className="body"
        id="snack"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
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
      <h3
        className="body"
        id="condiment"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
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
      <h3
        className="body"
        id="pet"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
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
      <h3
        className="body"
        id="laundry"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
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
