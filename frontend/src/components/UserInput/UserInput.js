import React, { Component } from 'react';
import {
    Container, Input,
    Button, InputGroup, InputGroupAddon,Col
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
                <h3>Latitude value: {this.state.lat}</h3>
                <h3>Longitude value: {this.state.lng}</h3>
                </Col>
                <Col></Col>
            </Container>
        );
    }
}

export default UserInput;
