import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
  } from 'reactstrap';
import './UserInput.css';

export class UserInput extends Component {
    render() {
        return (
            <Container className="UserInput">
                <Form className="form" inline>
                    <Col ></Col>
                        <FormGroup>
                            <Input
                            type="text"
                            maxLength="5"
                            onInput={this.maxLengthCheck}
                            name="zipCode"
                            id="zipCode"
                            placeholder="Enter Zip Code"
                            />
                        </FormGroup>
                        <Button color="secondary">Search</Button>
                        <Col ></Col>
                </Form>
            </Container>
        );
    }
}

export default UserInput;
