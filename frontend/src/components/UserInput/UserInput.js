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

    callApi(){
        this.zipCodeApi();
        this.listingsApi();
    }

    zipCodeApi() {
        let data = {zip:this.state.zip};
        fetch("/changeZip",{
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(res => res.json())
            .then(data => {
                this.setState({ lat: data.lat, lng: data.lng })
                console.log(data);
            })
            .catch(console.log)

    }

    listingsApi(){
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"postal_code":this.state.zip});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("/listingsQuery", requestOptions)
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
                <h3>Latitude value: {this.state.lat}</h3>
                <h3>Longitude value: {this.state.lng}</h3>
                </Col>
                <Col></Col>
            </Container>
        );
    }
}

export default UserInput;
