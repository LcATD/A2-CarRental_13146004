import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/shoppingCartContext";

export function Checkout() {
  const { cartItems, removeFromCart } = useShoppingCart();

  const states = [
    "Select...",
    "ACT",
    "NSW",
    "NT",
    "QLD",
    "SA",
    "TAS",
    "VIC",
    "WA",
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    suburb: "",
    state: states[0],
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length === 0) {
      //insert send email logic
      console.log(formData);
      //send success message
      alert("Your order is placed!");
      //reset the form
      setFormData({
        name: "",
        address: "",
        suburb: "",
        state: "",
        email: "",
      });
      //empty the cart
      cartItems.forEach((item) => {
        removeFromCart(item.model);
      });
      //redirect to finish page, in this case it's missing so just redirect back to home
      window.location.href = "/browse";
    } else {
      setFormErrors(errors);
    }
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Please enter your name.";
    } else if (/^([A-Z][-,a-z. ']+[ ]*)+/.test(data.name)) {
      errors.name = "Please enter a valid name.";
    }
    if (!data.address) {
      errors.address = "Please enter your address.";
    }
    if (!data.suburb) {
      errors.suburb = "Please enter your suburb.";
    } else if (
      !/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*(?:\s\d{4})?$/.test(data.suburb)
    ) {
      errors.suburb = "Please enter a valid suburb.";
    }
    if (!data.state || data.state === 0) {
      //just in case data.state is somehow null
      errors.state = "Please enter your state.";
    }
    if (!data.email) {
      errors.email = "Please enter your email.";
    } else if (!/^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/.test(data.email)) {
      errors.email = "Please enter a valid email.";
    }
    return errors;
  };

  return (
    <>
      <h1 className="body">Checkout</h1>
      <h3 className="body" style={{ marginTop: "-5rem", marginBottom: "2rem" }}>
        Please complete your order form
      </h3>
      <Form onSubmit={handleSubmit} className="mx-auto col-md-3">
        <Form.Group controlId="formName" className="mt-3">
          <Form.Label style={{ marginBottom: "-2rem" }}>
            Name<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={
              formErrors.name ? "form-control is-invalid" : "form-control"
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAddress" className="mt-3">
          <Form.Label style={{ marginBottom: "-2rem" }}>
            Address<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={
              formErrors.address ? "form-control is-invalid" : "form-control"
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.address}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSuburb" className="mt-3">
          <Form.Label style={{ marginBottom: "-2rem" }}>
            Suburb<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="suburb"
            value={formData.suburb}
            onChange={handleInputChange}
            className={
              formErrors.suburb ? "form-control is-invalid" : "form-control"
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.suburb}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formState" className="mt-3">
          <Form.Label style={{ marginBottom: "-2rem" }}>
            State<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            as="select"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className={
              formErrors.state
                ? "form-control is-invalid text-muted"
                : "form-control text-muted"
            }
            required
          >
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formErrors.state}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label style={{ marginBottom: "-2rem" }}>
            Email<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={
              formErrors.email ? "form-control is-invalid" : "form-control"
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <div
          className="d-flex justify-content-center align-items-center mt-3"
          style={{ height: "100%" }}
        >
          <Button type="submit" variant="success">
            Place Order
          </Button>
        </div>
      </Form>
    </>
  );
}
