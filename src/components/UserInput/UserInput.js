import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';
import './UserInput.css';

export class UserInput extends Component {
    render() {
        return (
            <Container className="UserInput">
                <h2>Search</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Zip Code:</Label>
                            <Input
                            type="text"
                            maxLength="5"
                            onInput={this.maxLengthCheck}
                            name="text"
                            id="exampleNumber"
                            placeholder="00000"
                            />
                        </FormGroup>
                    </Col>
                    <Button color="secondary">Search</Button>
                </Form>
            </Container>
        );
    }
}

export default UserInput;
