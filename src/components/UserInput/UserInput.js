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
                    <Col>
                        <FormGroup>
                            {/* <Label>Zip Code:</Label> */}
                            <Input
                            type="text"
                            maxLength="5"
                            onInput={this.maxLengthCheck}
                            name="ZipCode"
                            id="exampleNumber"
                            placeholder="Enter Zip Code"
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
