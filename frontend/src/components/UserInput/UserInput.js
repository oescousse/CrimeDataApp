import React, { Component } from 'react';
import {
    Container, Input,
    Button, InputGroup, InputGroupAddon,Col
} from 'reactstrap';
import './UserInput.css';

export class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoaded: false, zip: '', data: null };
        this.callApi = this.callApi.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) { this.setState({ zip: event.target.value }); }

    callApi() {
            var myHeaders = new Headers();
            myHeaders.append("postal_code", this.state.zip);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"postal_code":this.state.zip});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3000/listingsQuery", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <Container className="UserInput">
                <Col></Col>
                <Col sm={{ size: 6, offset: 3 }}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button color="info" onClick={this.callApi}>Search</Button>
                    </InputGroupAddon>
                    <Input type="text"
                        value={this.state.zip}
                        maxLength="5"
                        placeholder="Zip Code"
                        onChange={this.handleChange} />
                </InputGroup>
                </Col>
                <Col></Col>
            </Container>
        );
    }
}

export default UserInput;
