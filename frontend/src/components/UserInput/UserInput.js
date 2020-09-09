import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
  } from 'reactstrap';
import './UserInput.css';

export class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, zip: '', lat: '', lng: '', data: null };
        this.handleChange = this.handleChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    handleChange(event) { this.setState({ zip: event.target.value }); }

    callApi() {

        fetch("https://www.zipcodeapi.com/rest/info.json/" + this.state.zip)
            .then(res => res.json())
            .then(data => {
                this.setState({ lat: data.lat, lng: data.lng })
                console.log(data);
            })
            .catch(console.log)
    }


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
                            value={this.state.zip}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button onClick={this.callApi} color="secondary">Search</Button>
                        <h3>Latitude value: {this.state.lat}</h3>
                        <h3>Longitude value: {this.state.lng}</h3>
                        <Col ></Col>
                </Form>
            </Container>
        );
    }
}

export default UserInput;
