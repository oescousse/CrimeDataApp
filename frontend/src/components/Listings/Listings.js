import React from 'react';
import { Col, Container, Form } from 'reactstrap';
import ListingsTabs from "./ListingsTabs/ListingsTabs"
export function Listings() {
  return (
    <Container className="App">
        <h2>Listings</h2>
        <Form className="form">
        <Col>
          <ListingsTabs />
        </Col>
      </Form>
    </Container>
  );
}