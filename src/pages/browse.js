import items from "../data/cars.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Browse() {
  return (
    <>
      <h1 className="body"> </h1> {/* Head space because I'm too lazy */}
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Beverage")
          .map((item) => (
            <Col key={item.name}>
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
            <Col key={item.name}>
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
            <Col key={item.name}>
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
            <Col key={item.name}>
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
            <Col key={item.name}>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
