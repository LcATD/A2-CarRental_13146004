import items from "../data/groceryData.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Meat() {
  return (
    <>
      <h1 class="body">Meat</h1>
      <h3
        class="body"
        id="poultry"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Poultry
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Poultry")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        class="body"
        id="beef"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Beef
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Beef")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        class="body"
        id="pork"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Pork
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Pork")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
      <h3
        class="body"
        id="vegan"
        style={{ marginTop: "-3rem", marginBottom: "2rem" }}
      >
        Vegan
      </h3>
      <Row md={2} xs={1} lg={3}>
        {items
          .filter((item) => item.subCategory === "Vegan")
          .map((item) => (
            <Col>
              <StoreItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
}
