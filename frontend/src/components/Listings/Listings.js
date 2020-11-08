import React from 'react';
import { Col, Container, Form } from 'reactstrap';
import ListingsTabs from "./ListingsTabs/ListingsTabs"

export default function Listings(props) {
  return (
    <Container className="">
        <h2>Listings</h2>
        <Form className="form">
        <Col>
          <ListingsTabs postal_code={props.postal_code}/>
        </Col>
      </Form>
    </Container>
  );
}