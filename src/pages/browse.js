import items from "../data/cars.json";
import { StoreItem } from "../components/storeItem.js";
import { Col, Row } from "react-bootstrap";

export function Browse() {
  return (
    <>
      <h1 className="body"> </h1> {/* Head space because I'm too lazy */}
      <Row md={2} xs={1} lg={3}>
        {items.map((item) => (
          <Col key={item.model}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
